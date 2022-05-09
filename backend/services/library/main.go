package libraryService

import (
	"context"

	"github.com/deltabyte/hearth-media-server/backend/config"
	pb "github.com/deltabyte/hearth-media-server/gen/go/library"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	bolt "go.etcd.io/bbolt"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

type LibraryService struct {
	pb.UnimplementedLibraryServiceServer
	cfg *config.Config
	log *zap.SugaredLogger
	db  *bolt.DB
}

func (svc *LibraryService) Register(grpcServer *grpc.Server, gwMux *runtime.ServeMux) {
	service := &LibraryService{}
	pb.RegisterLibraryServiceServer(grpcServer, service)
	pb.RegisterLibraryServiceHandlerFromEndpoint(context.Background(), gwMux, "127.0.0.1:9000", []grpc.DialOption{grpc.WithInsecure()})
}

func New(cfg *config.Config, log *zap.SugaredLogger, db *bolt.DB) *LibraryService {
	return &LibraryService{
		pb.UnimplementedLibraryServiceServer{},
		cfg,
		log,
		db,
	}
}
