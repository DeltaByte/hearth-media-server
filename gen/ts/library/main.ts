/* eslint-disable */
import * as Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Timestamp } from "../google/protobuf/timestamp";
import { Status } from "../google/rpc/status";

export const protobufPackage = "hearthserver.v1";

/** Library object */
export enum LibraryType {
  LIBRARY_TYPE_UNSPECIFIED = 0,
  LIBRARY_TYPE_FILMS = 1,
  LIBRARY_TYPE_TV = 2,
  LIBRARY_TYPE_MUSIC = 3,
  UNRECOGNIZED = -1,
}

export function libraryTypeFromJSON(object: any): LibraryType {
  switch (object) {
    case 0:
    case "LIBRARY_TYPE_UNSPECIFIED":
      return LibraryType.LIBRARY_TYPE_UNSPECIFIED;
    case 1:
    case "LIBRARY_TYPE_FILMS":
      return LibraryType.LIBRARY_TYPE_FILMS;
    case 2:
    case "LIBRARY_TYPE_TV":
      return LibraryType.LIBRARY_TYPE_TV;
    case 3:
    case "LIBRARY_TYPE_MUSIC":
      return LibraryType.LIBRARY_TYPE_MUSIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LibraryType.UNRECOGNIZED;
  }
}

export function libraryTypeToJSON(object: LibraryType): string {
  switch (object) {
    case LibraryType.LIBRARY_TYPE_UNSPECIFIED:
      return "LIBRARY_TYPE_UNSPECIFIED";
    case LibraryType.LIBRARY_TYPE_FILMS:
      return "LIBRARY_TYPE_FILMS";
    case LibraryType.LIBRARY_TYPE_TV:
      return "LIBRARY_TYPE_TV";
    case LibraryType.LIBRARY_TYPE_MUSIC:
      return "LIBRARY_TYPE_MUSIC";
    default:
      return "UNKNOWN";
  }
}

export enum CollectionVisibility {
  COLLECTION_VISIBILITY_UNSPECIFIED = 0,
  COLLECTION_VISIBILITY_SHOW = 1,
  COLLECTION_VISIBILITY_PARTIAL = 2,
  COLLECTION_VISIBILITY_HIDE = 3,
  UNRECOGNIZED = -1,
}

export function collectionVisibilityFromJSON(
  object: any
): CollectionVisibility {
  switch (object) {
    case 0:
    case "COLLECTION_VISIBILITY_UNSPECIFIED":
      return CollectionVisibility.COLLECTION_VISIBILITY_UNSPECIFIED;
    case 1:
    case "COLLECTION_VISIBILITY_SHOW":
      return CollectionVisibility.COLLECTION_VISIBILITY_SHOW;
    case 2:
    case "COLLECTION_VISIBILITY_PARTIAL":
      return CollectionVisibility.COLLECTION_VISIBILITY_PARTIAL;
    case 3:
    case "COLLECTION_VISIBILITY_HIDE":
      return CollectionVisibility.COLLECTION_VISIBILITY_HIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollectionVisibility.UNRECOGNIZED;
  }
}

export function collectionVisibilityToJSON(
  object: CollectionVisibility
): string {
  switch (object) {
    case CollectionVisibility.COLLECTION_VISIBILITY_UNSPECIFIED:
      return "COLLECTION_VISIBILITY_UNSPECIFIED";
    case CollectionVisibility.COLLECTION_VISIBILITY_SHOW:
      return "COLLECTION_VISIBILITY_SHOW";
    case CollectionVisibility.COLLECTION_VISIBILITY_PARTIAL:
      return "COLLECTION_VISIBILITY_PARTIAL";
    case CollectionVisibility.COLLECTION_VISIBILITY_HIDE:
      return "COLLECTION_VISIBILITY_HIDE";
    default:
      return "UNKNOWN";
  }
}

export interface Library {
  id: string;
  name: string;
  type: LibraryType;
  hidden: boolean;
  scannerId: string;
  agentId: string;
  collectionVisibility: CollectionVisibility;
  directories: string[];
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

/** List Libraries. */
export interface ListLibrariesRequest {}

export interface ListLibrariesResponse {
  libraries: Library[];
}

/** Create Library */
export interface CreateLibraryRequest {
  name: string;
  type: LibraryType;
  hidden: boolean;
  scannerId: string;
  agentId: string;
  collectionVisibility: CollectionVisibility;
  directories: string[];
}

export interface CreateLibraryResponse {
  library: Library | undefined;
  status: Status | undefined;
}

/** Update Library */
export interface UpdateLibraryRequest {
  id: string;
  name: string;
  type: LibraryType;
  hidden: boolean;
  scannerId: string;
  agentId: string;
  collectionVisibility: CollectionVisibility;
  directories: string[];
}

export interface UpdateLibraryResponse {
  library: Library | undefined;
  status: Status | undefined;
}

/** Delete Library */
export interface DeleteLibraryRequest {
  id: string;
}

export interface DeleteLibraryResponse {
  status: Status | undefined;
}

function createBaseLibrary(): Library {
  return {
    id: "",
    name: "",
    type: 0,
    hidden: false,
    scannerId: "",
    agentId: "",
    collectionVisibility: 0,
    directories: [],
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Library = {
  encode(
    message: Library,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.hidden === true) {
      writer.uint32(32).bool(message.hidden);
    }
    if (message.scannerId !== "") {
      writer.uint32(42).string(message.scannerId);
    }
    if (message.agentId !== "") {
      writer.uint32(50).string(message.agentId);
    }
    if (message.collectionVisibility !== 0) {
      writer.uint32(56).int32(message.collectionVisibility);
    }
    for (const v of message.directories) {
      writer.uint32(66).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Library {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.hidden = reader.bool();
          break;
        case 5:
          message.scannerId = reader.string();
          break;
        case 6:
          message.agentId = reader.string();
          break;
        case 7:
          message.collectionVisibility = reader.int32() as any;
          break;
        case 8:
          message.directories.push(reader.string());
          break;
        case 9:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Library {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? libraryTypeFromJSON(object.type) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      scannerId: isSet(object.scannerId) ? String(object.scannerId) : "",
      agentId: isSet(object.agentId) ? String(object.agentId) : "",
      collectionVisibility: isSet(object.collectionVisibility)
        ? collectionVisibilityFromJSON(object.collectionVisibility)
        : 0,
      directories: Array.isArray(object?.directories)
        ? object.directories.map((e: any) => String(e))
        : [],
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: Library): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = libraryTypeToJSON(message.type));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.scannerId !== undefined && (obj.scannerId = message.scannerId);
    message.agentId !== undefined && (obj.agentId = message.agentId);
    message.collectionVisibility !== undefined &&
      (obj.collectionVisibility = collectionVisibilityToJSON(
        message.collectionVisibility
      ));
    if (message.directories) {
      obj.directories = message.directories.map((e) => e);
    } else {
      obj.directories = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Library>, I>>(object: I): Library {
    const message = createBaseLibrary();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.hidden = object.hidden ?? false;
    message.scannerId = object.scannerId ?? "";
    message.agentId = object.agentId ?? "";
    message.collectionVisibility = object.collectionVisibility ?? 0;
    message.directories = object.directories?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseListLibrariesRequest(): ListLibrariesRequest {
  return {};
}

export const ListLibrariesRequest = {
  encode(
    _: ListLibrariesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLibrariesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLibrariesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListLibrariesRequest {
    return {};
  },

  toJSON(_: ListLibrariesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLibrariesRequest>, I>>(
    _: I
  ): ListLibrariesRequest {
    const message = createBaseListLibrariesRequest();
    return message;
  },
};

function createBaseListLibrariesResponse(): ListLibrariesResponse {
  return { libraries: [] };
}

export const ListLibrariesResponse = {
  encode(
    message: ListLibrariesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.libraries) {
      Library.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLibrariesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLibrariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.libraries.push(Library.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLibrariesResponse {
    return {
      libraries: Array.isArray(object?.libraries)
        ? object.libraries.map((e: any) => Library.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListLibrariesResponse): unknown {
    const obj: any = {};
    if (message.libraries) {
      obj.libraries = message.libraries.map((e) =>
        e ? Library.toJSON(e) : undefined
      );
    } else {
      obj.libraries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLibrariesResponse>, I>>(
    object: I
  ): ListLibrariesResponse {
    const message = createBaseListLibrariesResponse();
    message.libraries =
      object.libraries?.map((e) => Library.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateLibraryRequest(): CreateLibraryRequest {
  return {
    name: "",
    type: 0,
    hidden: false,
    scannerId: "",
    agentId: "",
    collectionVisibility: 0,
    directories: [],
  };
}

export const CreateLibraryRequest = {
  encode(
    message: CreateLibraryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.hidden === true) {
      writer.uint32(24).bool(message.hidden);
    }
    if (message.scannerId !== "") {
      writer.uint32(34).string(message.scannerId);
    }
    if (message.agentId !== "") {
      writer.uint32(42).string(message.agentId);
    }
    if (message.collectionVisibility !== 0) {
      writer.uint32(48).int32(message.collectionVisibility);
    }
    for (const v of message.directories) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLibraryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLibraryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.hidden = reader.bool();
          break;
        case 4:
          message.scannerId = reader.string();
          break;
        case 5:
          message.agentId = reader.string();
          break;
        case 6:
          message.collectionVisibility = reader.int32() as any;
          break;
        case 7:
          message.directories.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLibraryRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? libraryTypeFromJSON(object.type) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      scannerId: isSet(object.scannerId) ? String(object.scannerId) : "",
      agentId: isSet(object.agentId) ? String(object.agentId) : "",
      collectionVisibility: isSet(object.collectionVisibility)
        ? collectionVisibilityFromJSON(object.collectionVisibility)
        : 0,
      directories: Array.isArray(object?.directories)
        ? object.directories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CreateLibraryRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = libraryTypeToJSON(message.type));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.scannerId !== undefined && (obj.scannerId = message.scannerId);
    message.agentId !== undefined && (obj.agentId = message.agentId);
    message.collectionVisibility !== undefined &&
      (obj.collectionVisibility = collectionVisibilityToJSON(
        message.collectionVisibility
      ));
    if (message.directories) {
      obj.directories = message.directories.map((e) => e);
    } else {
      obj.directories = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLibraryRequest>, I>>(
    object: I
  ): CreateLibraryRequest {
    const message = createBaseCreateLibraryRequest();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.hidden = object.hidden ?? false;
    message.scannerId = object.scannerId ?? "";
    message.agentId = object.agentId ?? "";
    message.collectionVisibility = object.collectionVisibility ?? 0;
    message.directories = object.directories?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateLibraryResponse(): CreateLibraryResponse {
  return { library: undefined, status: undefined };
}

export const CreateLibraryResponse = {
  encode(
    message: CreateLibraryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.library !== undefined) {
      Library.encode(message.library, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLibraryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLibraryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.library = Library.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLibraryResponse {
    return {
      library: isSet(object.library)
        ? Library.fromJSON(object.library)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CreateLibraryResponse): unknown {
    const obj: any = {};
    message.library !== undefined &&
      (obj.library = message.library
        ? Library.toJSON(message.library)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLibraryResponse>, I>>(
    object: I
  ): CreateLibraryResponse {
    const message = createBaseCreateLibraryResponse();
    message.library =
      object.library !== undefined && object.library !== null
        ? Library.fromPartial(object.library)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseUpdateLibraryRequest(): UpdateLibraryRequest {
  return {
    id: "",
    name: "",
    type: 0,
    hidden: false,
    scannerId: "",
    agentId: "",
    collectionVisibility: 0,
    directories: [],
  };
}

export const UpdateLibraryRequest = {
  encode(
    message: UpdateLibraryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.hidden === true) {
      writer.uint32(32).bool(message.hidden);
    }
    if (message.scannerId !== "") {
      writer.uint32(42).string(message.scannerId);
    }
    if (message.agentId !== "") {
      writer.uint32(50).string(message.agentId);
    }
    if (message.collectionVisibility !== 0) {
      writer.uint32(56).int32(message.collectionVisibility);
    }
    for (const v of message.directories) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLibraryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLibraryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.hidden = reader.bool();
          break;
        case 5:
          message.scannerId = reader.string();
          break;
        case 6:
          message.agentId = reader.string();
          break;
        case 7:
          message.collectionVisibility = reader.int32() as any;
          break;
        case 8:
          message.directories.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLibraryRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? libraryTypeFromJSON(object.type) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      scannerId: isSet(object.scannerId) ? String(object.scannerId) : "",
      agentId: isSet(object.agentId) ? String(object.agentId) : "",
      collectionVisibility: isSet(object.collectionVisibility)
        ? collectionVisibilityFromJSON(object.collectionVisibility)
        : 0,
      directories: Array.isArray(object?.directories)
        ? object.directories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UpdateLibraryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = libraryTypeToJSON(message.type));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.scannerId !== undefined && (obj.scannerId = message.scannerId);
    message.agentId !== undefined && (obj.agentId = message.agentId);
    message.collectionVisibility !== undefined &&
      (obj.collectionVisibility = collectionVisibilityToJSON(
        message.collectionVisibility
      ));
    if (message.directories) {
      obj.directories = message.directories.map((e) => e);
    } else {
      obj.directories = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLibraryRequest>, I>>(
    object: I
  ): UpdateLibraryRequest {
    const message = createBaseUpdateLibraryRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.hidden = object.hidden ?? false;
    message.scannerId = object.scannerId ?? "";
    message.agentId = object.agentId ?? "";
    message.collectionVisibility = object.collectionVisibility ?? 0;
    message.directories = object.directories?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateLibraryResponse(): UpdateLibraryResponse {
  return { library: undefined, status: undefined };
}

export const UpdateLibraryResponse = {
  encode(
    message: UpdateLibraryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.library !== undefined) {
      Library.encode(message.library, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLibraryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLibraryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.library = Library.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLibraryResponse {
    return {
      library: isSet(object.library)
        ? Library.fromJSON(object.library)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UpdateLibraryResponse): unknown {
    const obj: any = {};
    message.library !== undefined &&
      (obj.library = message.library
        ? Library.toJSON(message.library)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLibraryResponse>, I>>(
    object: I
  ): UpdateLibraryResponse {
    const message = createBaseUpdateLibraryResponse();
    message.library =
      object.library !== undefined && object.library !== null
        ? Library.fromPartial(object.library)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseDeleteLibraryRequest(): DeleteLibraryRequest {
  return { id: "" };
}

export const DeleteLibraryRequest = {
  encode(
    message: DeleteLibraryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLibraryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLibraryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLibraryRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: DeleteLibraryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLibraryRequest>, I>>(
    object: I
  ): DeleteLibraryRequest {
    const message = createBaseDeleteLibraryRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteLibraryResponse(): DeleteLibraryResponse {
  return { status: undefined };
}

export const DeleteLibraryResponse = {
  encode(
    message: DeleteLibraryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLibraryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLibraryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLibraryResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: DeleteLibraryResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLibraryResponse>, I>>(
    object: I
  ): DeleteLibraryResponse {
    const message = createBaseDeleteLibraryResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

export interface LibraryService {
  /** lists libraries. */
  ListLibraries(
    request: DeepPartial<ListLibrariesRequest>,
    metadata?: grpc.Metadata
  ): Promise<ListLibrariesResponse>;
  /** creates a new message and returns it. */
  CreateLibrary(
    request: DeepPartial<CreateLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<CreateLibraryResponse>;
  /** updates a library. Returns INVALID_ARGUMENT if the ID is unknown. */
  UpdateLibrary(
    request: DeepPartial<UpdateLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<UpdateLibraryResponse>;
  /** deletes a library. */
  DeleteLibrary(
    request: DeepPartial<DeleteLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<DeleteLibraryResponse>;
}

export class LibraryServiceClientImpl implements LibraryService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListLibraries = this.ListLibraries.bind(this);
    this.CreateLibrary = this.CreateLibrary.bind(this);
    this.UpdateLibrary = this.UpdateLibrary.bind(this);
    this.DeleteLibrary = this.DeleteLibrary.bind(this);
  }

  ListLibraries(
    request: DeepPartial<ListLibrariesRequest>,
    metadata?: grpc.Metadata
  ): Promise<ListLibrariesResponse> {
    return this.rpc.unary(
      LibraryServiceListLibrariesDesc,
      ListLibrariesRequest.fromPartial(request),
      metadata
    );
  }

  CreateLibrary(
    request: DeepPartial<CreateLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<CreateLibraryResponse> {
    return this.rpc.unary(
      LibraryServiceCreateLibraryDesc,
      CreateLibraryRequest.fromPartial(request),
      metadata
    );
  }

  UpdateLibrary(
    request: DeepPartial<UpdateLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<UpdateLibraryResponse> {
    return this.rpc.unary(
      LibraryServiceUpdateLibraryDesc,
      UpdateLibraryRequest.fromPartial(request),
      metadata
    );
  }

  DeleteLibrary(
    request: DeepPartial<DeleteLibraryRequest>,
    metadata?: grpc.Metadata
  ): Promise<DeleteLibraryResponse> {
    return this.rpc.unary(
      LibraryServiceDeleteLibraryDesc,
      DeleteLibraryRequest.fromPartial(request),
      metadata
    );
  }
}

export const LibraryServiceDesc = {
  serviceName: "hearthserver.v1.LibraryService",
};

export const LibraryServiceListLibrariesDesc: UnaryMethodDefinitionish = {
  methodName: "ListLibraries",
  service: LibraryServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListLibrariesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ListLibrariesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const LibraryServiceCreateLibraryDesc: UnaryMethodDefinitionish = {
  methodName: "CreateLibrary",
  service: LibraryServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateLibraryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CreateLibraryResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const LibraryServiceUpdateLibraryDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateLibrary",
  service: LibraryServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UpdateLibraryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...UpdateLibraryResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const LibraryServiceDeleteLibraryDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteLibrary",
  service: LibraryServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteLibraryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DeleteLibraryResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
