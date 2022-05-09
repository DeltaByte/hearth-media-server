package library

import (
	"time"

	"github.com/deltabyte/hearth-media-server/backend/database"
	"github.com/deltabyte/hearth-media-server/backend/helpers"
	pb "github.com/deltabyte/hearth-media-server/gen/go/library"

	"github.com/segmentio/ksuid"
	bolt "go.etcd.io/bbolt"
	"google.golang.org/protobuf/proto"
)

func Decode(encoded []byte) (*pb.Library, error) {
	library := &pb.Library{}
	if err := proto.Unmarshal(encoded, library); err != nil {
		return nil, err
	}
	return library, nil
}

func New(chanType pb.LibraryType) *pb.Library {
	lib := &pb.Library{
		Id: ksuid.New().String(),
	}

	return lib
}

func Save(db *bolt.DB, lib *pb.Library) error {
	// update timestamps
	now := time.Now()
	helpers.TouchTimestamp(lib.CreatedAt, now, true)
	helpers.TouchTimestamp(lib.UpdatedAt, now, false)

	// encode to binary
	enc, err := proto.Marshal(lib)
	if err != nil {
		return err
	}

	// get ID
	id, err := helpers.ParseKSUIDBytes(lib.Id)
	if err != nil {
		return err
	}

	// persist to DB
	return db.Update(func(tx *bolt.Tx) error {
		// persist the library
		bkt := tx.Bucket(database.Buckets.Libraries)
		err = bkt.Put(id, enc)
		if err != nil {
			return err
		}

		// assumed that err is either an error or nil by this point
		return err
	})
}
