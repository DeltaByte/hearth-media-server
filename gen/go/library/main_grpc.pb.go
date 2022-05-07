// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: library/main.proto

package library

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// LibraryServiceClient is the client API for LibraryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LibraryServiceClient interface {
	// lists libraries.
	ListLibraries(ctx context.Context, in *ListLibrariesRequest, opts ...grpc.CallOption) (*ListLibrariesResponse, error)
	// creates a new message and returns it.
	CreateLibrary(ctx context.Context, in *CreateLibraryRequest, opts ...grpc.CallOption) (*Library, error)
	// updates a library. Returns INVALID_ARGUMENT if the ID is unknown.
	UpdateLibrary(ctx context.Context, in *UpdateLibraryRequest, opts ...grpc.CallOption) (*UpdateLibraryResponse, error)
	// deletes a library.
	DeleteLibrary(ctx context.Context, in *DeleteLibraryRequest, opts ...grpc.CallOption) (*DeleteLibraryResponse, error)
}

type libraryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLibraryServiceClient(cc grpc.ClientConnInterface) LibraryServiceClient {
	return &libraryServiceClient{cc}
}

func (c *libraryServiceClient) ListLibraries(ctx context.Context, in *ListLibrariesRequest, opts ...grpc.CallOption) (*ListLibrariesResponse, error) {
	out := new(ListLibrariesResponse)
	err := c.cc.Invoke(ctx, "/hearthserver.v1.LibraryService/ListLibraries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *libraryServiceClient) CreateLibrary(ctx context.Context, in *CreateLibraryRequest, opts ...grpc.CallOption) (*Library, error) {
	out := new(Library)
	err := c.cc.Invoke(ctx, "/hearthserver.v1.LibraryService/CreateLibrary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *libraryServiceClient) UpdateLibrary(ctx context.Context, in *UpdateLibraryRequest, opts ...grpc.CallOption) (*UpdateLibraryResponse, error) {
	out := new(UpdateLibraryResponse)
	err := c.cc.Invoke(ctx, "/hearthserver.v1.LibraryService/UpdateLibrary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *libraryServiceClient) DeleteLibrary(ctx context.Context, in *DeleteLibraryRequest, opts ...grpc.CallOption) (*DeleteLibraryResponse, error) {
	out := new(DeleteLibraryResponse)
	err := c.cc.Invoke(ctx, "/hearthserver.v1.LibraryService/DeleteLibrary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LibraryServiceServer is the server API for LibraryService service.
// All implementations must embed UnimplementedLibraryServiceServer
// for forward compatibility
type LibraryServiceServer interface {
	// lists libraries.
	ListLibraries(context.Context, *ListLibrariesRequest) (*ListLibrariesResponse, error)
	// creates a new message and returns it.
	CreateLibrary(context.Context, *CreateLibraryRequest) (*Library, error)
	// updates a library. Returns INVALID_ARGUMENT if the ID is unknown.
	UpdateLibrary(context.Context, *UpdateLibraryRequest) (*UpdateLibraryResponse, error)
	// deletes a library.
	DeleteLibrary(context.Context, *DeleteLibraryRequest) (*DeleteLibraryResponse, error)
	mustEmbedUnimplementedLibraryServiceServer()
}

// UnimplementedLibraryServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLibraryServiceServer struct {
}

func (UnimplementedLibraryServiceServer) ListLibraries(context.Context, *ListLibrariesRequest) (*ListLibrariesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLibraries not implemented")
}
func (UnimplementedLibraryServiceServer) CreateLibrary(context.Context, *CreateLibraryRequest) (*Library, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLibrary not implemented")
}
func (UnimplementedLibraryServiceServer) UpdateLibrary(context.Context, *UpdateLibraryRequest) (*UpdateLibraryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLibrary not implemented")
}
func (UnimplementedLibraryServiceServer) DeleteLibrary(context.Context, *DeleteLibraryRequest) (*DeleteLibraryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLibrary not implemented")
}
func (UnimplementedLibraryServiceServer) mustEmbedUnimplementedLibraryServiceServer() {}

// UnsafeLibraryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LibraryServiceServer will
// result in compilation errors.
type UnsafeLibraryServiceServer interface {
	mustEmbedUnimplementedLibraryServiceServer()
}

func RegisterLibraryServiceServer(s grpc.ServiceRegistrar, srv LibraryServiceServer) {
	s.RegisterService(&LibraryService_ServiceDesc, srv)
}

func _LibraryService_ListLibraries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListLibrariesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LibraryServiceServer).ListLibraries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hearthserver.v1.LibraryService/ListLibraries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LibraryServiceServer).ListLibraries(ctx, req.(*ListLibrariesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LibraryService_CreateLibrary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLibraryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LibraryServiceServer).CreateLibrary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hearthserver.v1.LibraryService/CreateLibrary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LibraryServiceServer).CreateLibrary(ctx, req.(*CreateLibraryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LibraryService_UpdateLibrary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLibraryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LibraryServiceServer).UpdateLibrary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hearthserver.v1.LibraryService/UpdateLibrary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LibraryServiceServer).UpdateLibrary(ctx, req.(*UpdateLibraryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LibraryService_DeleteLibrary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLibraryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LibraryServiceServer).DeleteLibrary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hearthserver.v1.LibraryService/DeleteLibrary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LibraryServiceServer).DeleteLibrary(ctx, req.(*DeleteLibraryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// LibraryService_ServiceDesc is the grpc.ServiceDesc for LibraryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LibraryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "hearthserver.v1.LibraryService",
	HandlerType: (*LibraryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListLibraries",
			Handler:    _LibraryService_ListLibraries_Handler,
		},
		{
			MethodName: "CreateLibrary",
			Handler:    _LibraryService_CreateLibrary_Handler,
		},
		{
			MethodName: "UpdateLibrary",
			Handler:    _LibraryService_UpdateLibrary_Handler,
		},
		{
			MethodName: "DeleteLibrary",
			Handler:    _LibraryService_DeleteLibrary_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "library/main.proto",
}
