package library

import (
	"github.com/deltabyte/hearth-media-server/backend/database"
	"github.com/deltabyte/hearth-media-server/backend/helpers"
	pb "github.com/deltabyte/hearth-media-server/gen/go/library"

	"github.com/segmentio/ksuid"
	bolt "go.etcd.io/bbolt"
)

func GetAll(db *bolt.DB) ([]*pb.Library, error) {
	var libraries []*pb.Library

	err := db.View(func(tx *bolt.Tx) error {
		dbb := tx.Bucket(database.Buckets.Libraries)

		// iterate over all libraries, decode, and add to result
		dbb.ForEach(func(k, v []byte) error {
			decoded, err := Decode(v)
			if err != nil {
				return err
			}
			libraries = append(libraries, decoded)
			return nil
		})

		return nil
	})

	return libraries, err
}

func Find(db *bolt.DB, id ksuid.KSUID) (*pb.Library, error) {
	var channel *pb.Library

	err := db.View(func(tx *bolt.Tx) error {
		dbb := tx.Bucket(database.Buckets.Libraries)

		// get by ID
		res := dbb.Get(id.Bytes())
		if res == nil {
			channel = nil
			return nil
		}

		// decode channel
		decoded, err := Decode(res)
		if err != nil {
			return err
		}

		channel = decoded
		return nil
	})

	return channel, err
}

func Delete(db *bolt.DB, chn *pb.Library) error {
	// get ID
	id, err := helpers.ParseKSUIDBytes(chn.Id)
	if err != nil {
		return err
	}

	// remove from DB
	return db.Update(func(tx *bolt.Tx) error {
		bkt := tx.Bucket(database.Buckets.Libraries)

		// delete self
		err := bkt.Delete(id)

		// assumed that err is either an error or nil by this point
		return err
	})
}
