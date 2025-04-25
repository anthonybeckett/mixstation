.PHONY: start stop restart logs frontend backend help

# Default target to show available commands
help:
	@echo "Available commands:"
	@echo "  start      - Start Laravel Sail and all services in detached mode"
	@echo "  stop       - Stop all running containers"
	@echo "  restart    - Restart the containers"
	@echo "  logs       - Tail logs for all containers"
	@echo "  frontend   - Start just the frontend container"
	@echo "  backend    - Start just the Laravel backend container"

# Start Laravel Sail and all services in detached mode
start:
	cd backend && ./vendor/bin/sail up -d

# Stop all running containers
stop:
	cd backend && ./vendor/bin/sail down

# Restart the containers
restart:
	cd backend && ./vendor/bin/sail down && ./vendor/bin/sail up -d

# Tail logs for all containers
logs:
	cd backend && ./vendor/bin/sail logs -f

# Just run the frontend container (if needed independently)
frontend:
	docker compose -f backend/docker-compose.yml up -d vue-frontend

# Just run the backend Laravel app
backend:
	cd backend && ./vendor/bin/sail up -d laravel.test
