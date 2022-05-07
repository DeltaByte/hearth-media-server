# binary aliases
GO  = GO111MODULE=on go
BUF = buf
NPM = npm

# variables
BUILD_DIR=./build
PROTO_DIR=./proto

##@ Dependencies
.PHONY: install install-tools intsall-go install-node

install: install-tools install-go install-proto install-node ## Install all dependencies

install-tools: ## Install runtimes
	@echo "Installing tooling"
	asdf install

install-go: ## Install Go dependencies
	@echo "Installing Golang packages"
	cd backend && $(GO) run build.go setup

install-proto: ## Install protobuf dependencies
	@echo "Installing Protobuf dependencies"
	$(BUF) mod update ${PROTO_DIR}

install-node: ## Install Node.js dependencies
	@echo "Installing Node.js packages"
	cd frontend && $(NPM) install

##@ Lint
.PHONY: lint lint-go lint-proto

lint: lint-go lint-proto ## Run all linters

lint-go: ## Lint go code
	@echo "TODO"

lint-proto: ## Lint protobuf definitions
	@echo "linting protobuf"
	$(BUF) lint

##@ Testing
.PHONY: test test-go test-go-full test-proto

test: test-go-full test-proto ## Run all tests

test-go: ## Short test-suite
	@echo "running minimal tests"
	$(GO) test --short ./...

test-go-full: ## Full test-suite
	@echo "running all tests"
	$(GO) test -v ./...

test-proto: ## Check for protobuf breaking changes
	@echo "comparing protobuf snapshot"
	$(BUF) breaking ${PROTO_DIR} --against buf.snapshot

##@ Build
.PHONY: build build-server build-proto build-frontend

build: build-proto build-server build-frontend ## Build everything

build-server: ## Build Docker image for development.
	@echo "Not implemented"

build-proto: ## Compile protobuf definitions
	@echo "generating protobuf libs"
	$(BUF) generate ${PROTO_DIR}
	@echo "compiling protobuf snapshot"
	$(BUF) build ${PROTO_DIR} -o buf.snapshot

build-frontend: ## Build static frontend
	@echo "Building Vue frontend"
	cd frontend && $(NPM) run build
	cd frontend && $(NPM) run generate

##@ Local development
.PHONY: start-frontend start-backend

start-frontend: ## Start frontend dev server locally
	@echo "Starting frontend live devserver"
	cd frontend && $(NPM) run dev

start-backend:## Start backend server locally
	@echo "Starting backend server locally"
	cd backend && $(GO) run server.go

##@ Helpers
.PHONY: help

help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
