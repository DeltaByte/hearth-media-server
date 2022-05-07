package libraryService

import (
	"context"

	pb "github.com/deltabyte/hearth-media-server/gen/go/library"
)

func (srv *LibraryService) ListLibraries(ctx context.Context, in *pb.ListLibrariesRequest) (*pb.ListLibrariesResponse, error) {
	// respond to client
	return &pb.ListLibrariesResponse{
		Libraries: []*pb.Library{
			{
				Id: "foobar",
			},
		},
	}, nil
}
