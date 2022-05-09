package main

import (
	"io"

	"net"
	"net/http"

	"github.com/deltabyte/hearth-media-server/backend/config"
	"github.com/deltabyte/hearth-media-server/backend/database"
	"github.com/deltabyte/hearth-media-server/backend/logging"
	libraryService "github.com/deltabyte/hearth-media-server/backend/services/library"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/soheilhy/cmux"
	"golang.org/x/net/websocket"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func EchoServer(ws *websocket.Conn) {
	if _, err := io.Copy(ws, ws); err != nil {
		panic(err)
	}
}

func main() {
	// load config
	cfg := config.Load()

	// init backend crap
	logging.Init()
	log := logging.Default()
	db := database.Init(cfg.Paths.Database)
	defer log.Sync()
	defer db.Close()

	// setup TCP mux
	listener, err := net.Listen("tcp", ":9000")
	if err != nil {
		panic(err)
	}
	mux := cmux.New(listener)

	// register listeners
	grpcListener := mux.MatchWithWriters(cmux.HTTP2MatchHeaderFieldSendSettings("content-type", "application/grpc"))
	wsListener := mux.Match(cmux.HTTP1HeaderField("Upgrade", "websocket"))
	httpListener := mux.Match(cmux.HTTP1Fast())

	// init servers
	grpcServer := grpc.NewServer()
	gwMux := runtime.NewServeMux()
	httpServer := &http.Server{
		Handler: gwMux,
	}
	wsServer := &http.Server{
		Handler: websocket.Handler(EchoServer),
	}

	// register services
	reflection.Register(grpcServer)
	libraryService.New(cfg, log, db).Register(grpcServer, gwMux)

	// start servers
	go grpcServer.Serve(grpcListener)
	go wsServer.Serve(wsListener)
	go httpServer.Serve(httpListener)
	mux.Serve()
}
