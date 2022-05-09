package database

import (
	"log"
	"path/filepath"

	bolt "go.etcd.io/bbolt"
)

var Buckets bucketsNames

type bucketsNames struct {
	Libraries []byte
}

func init() {
	Buckets = bucketsNames{
		Libraries: []byte("libraries"),
	}
}

func initBucket(tx *bolt.Tx, name string) error {
	_, err := tx.CreateBucketIfNotExists([]byte(name))
	return err
}

func Init(path string) *bolt.DB {
	// open BoltDB
	dbPath := filepath.Join(path, "hearthserver.db")
	db, err := bolt.Open(dbPath, 0666, nil)

	if err != nil {
		log.Fatal("Failed to open database\n", err)
	}

	// ensure that buckets exist
	err = db.Update(func(tx *bolt.Tx) error {
		// channels
		if err := initBucket(tx, "libraries"); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		panic("Failed to migrate DB")
	}

	return db
}
