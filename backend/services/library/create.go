package libraryService

import (
	"context"

	"github.com/deltabyte/hearth-media-server/backend/entities/library"
	"github.com/deltabyte/hearth-media-server/backend/helpers"
	pb "github.com/deltabyte/hearth-media-server/gen/go/library"

	"github.com/jinzhu/copier"
)

type createChannelValidator struct {
	Type pb.LibraryType `validate:"ne=0,required"`
	Name string         `validate:"max=100,required"`
}

func (svc *LibraryService) CreateChannel(ctx context.Context, req *pb.CreateLibraryRequest) (*pb.CreateLibraryResponse, error) {
	// validate request
	if err := helpers.ValidateRequest(&createChannelValidator{}, req); err != nil {
		return &pb.CreateLibraryResponse{
			Status: helpers.StatusValidationFailed(err),
		}, nil
	}

	// bind request to new library
	lib := library.New(req.GetType())
	copier.Copy(lib, req)

	// persist library
	if err := library.Save(svc.db, lib); err != nil {
		svc.log.Error("Failed to persist library", err)
		return nil, err
	}

	// return created library to client
	return &pb.CreateLibraryResponse{
		Library: lib,
		Status:  helpers.StatusOK(),
	}, nil
}
