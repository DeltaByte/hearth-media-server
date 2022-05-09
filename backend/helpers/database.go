package helpers

import (
	"time"

	"github.com/segmentio/ksuid"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TouchTimestamp(pbTS *timestamppb.Timestamp, now time.Time, nilOnly bool) *timestamppb.Timestamp {
	ts := time.Time{}
	if pbTS != nil {
		ts = pbTS.AsTime()
	}

	if ts.IsZero() || !nilOnly {
		ts = now
	}

	return timestamppb.New(ts)
}

func ParseKSUIDBytes(id string) ([]byte, error) {
	kid, err := ksuid.Parse(id)

	if err != nil {
		return nil, err
	}

	return kid.Bytes(), nil
}
