package config

import (
	"flag"
	"log"
	"time"

	"github.com/jinzhu/configor"
)

type Config struct {
	Paths   pathsConfig
	Backup  backupConfig
	Logging loggingConfig
	Port    uint   `default:"8080"`
	Host    string `default:"0.0.0.0"`
	Banner  bool   `default:"true"`
}

type pathsConfig struct {
	Database string `default:"../storage/database"`
	Media    string `default:"../storage/media"`
	Logs     string `default:"../storage/logs"`
	Backup   string `default:"../storage/backup"`
}

type backupConfig struct {
	Schedule time.Duration `default:"6h"`
	Amount   uint16        `default:"28"`
	Group    bool          `default:"false"`
}

type loggingConfig struct {
	RemoteIP  bool `default:"true"`
	UserAgent bool `default:"true"`
}

func Load() *Config {
	config := &Config{}

	// parse env vars and load config file
	configPath := flag.String("config-file", "config.toml", "Configuration file location")
	flag.Parse()

	// parse config
	err := configor.New(&configor.Config{
		ENVPrefix:            "HEARTHSERVER",
		ErrorOnUnmatchedKeys: true,
	}).Load(config, *configPath)

	// log error and kill server if config is invalid
	if err != nil {
		log.Fatalf("Failed to load config from %s: %s", *configPath, err)
	}

	return config
}
