.PHONY: help build up down test lint migrate seed-inventory sync-orders

help:
	@echo "Retail Landing Zone - Management Commands"
	@echo "----------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Integration)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "seed-inventory     : Seed initial product inventory"
	@echo "sync-orders        : Simulate order processing from POS systems"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/unit tests/integration
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker core
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

seed-inventory:
	docker-compose exec api python scripts/validate/run.py --action seed

sync-orders:
	docker-compose exec api python scripts/validate/run.py --action sync
