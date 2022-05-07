package libraryService

import (
	"context"

	pb "github.com/deltabyte/hearth-media-server/gen/go/library"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
)

type LibraryService struct {
	pb.UnimplementedLibraryServiceServer
}

func Register(grpcServer *grpc.Server, gwMux *runtime.ServeMux) {
	service := &LibraryService{}
	pb.RegisterLibraryServiceServer(grpcServer, service)
	pb.RegisterLibraryServiceHandlerFromEndpoint(context.Background(), gwMux, "127.0.0.1:9000", []grpc.DialOption{grpc.WithInsecure()})
}
