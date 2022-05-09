package libraryService

import (
	"context"

	"github.com/deltabyte/hearth-media-server/backend/entities/library"
	pb "github.com/deltabyte/hearth-media-server/gen/go/library"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (svc *LibraryService) ListLibraries(ctx context.Context, in *pb.ListLibrariesRequest) (*pb.ListLibrariesResponse, error) {
	// get data from DB
	libs, err := library.GetAll(svc.db)
	if err != nil {
		svc.log.Error("Failed to load libraries", err)
		return nil, status.Errorf(codes.Internal, "Database error")
	}

	// respond to client
	return &pb.ListLibrariesResponse{
		Libraries: libs,
	}, nil
}
