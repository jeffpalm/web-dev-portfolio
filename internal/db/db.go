package db

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"os"
	"sync"
)

var clientInstance *mongo.Client
var mongoOnce sync.Once
var clientInstanceError error

type Collection string

const (
	GitHubStatsCollection Collection = "github_stats"
)
const (
	Database = "jeffpalmdev"
)

func GetDBClient() (*mongo.Client, error) {
	mongoOnce.Do(func() {
		url := os.Getenv("MONGO_URI")
		clientOptions := options.Client().ApplyURI(url)

		client, err := mongo.Connect(context.TODO(), clientOptions)

		clientInstance = client

		clientInstanceError = err
	})

	return clientInstance, clientInstanceError
}
