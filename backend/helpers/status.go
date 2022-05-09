package helpers

import (
	"github.com/go-playground/validator/v10"
	"google.golang.org/genproto/googleapis/rpc/status"
	"google.golang.org/grpc/codes"
)

func StatusOK() *status.Status {
	return &status.Status{
		Code: int32(codes.OK),
	}
}

func StatusValidationFailed(err error) *status.Status {
	// handle actual errors
	if _, ok := err.(*validator.InvalidValidationError); ok {
		return &status.Status{
			Code: int32(codes.Internal),
		}
	}

	// validationErrors := err.(validator.ValidationErrors)
	return &status.Status{
		Code:    int32(codes.InvalidArgument),
		Message: "Validation failed.",
		// Details: validationErrors,
	}
}
