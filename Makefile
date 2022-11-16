launch-client: 
	cd client && npm run dev -- --open
format:
	cd client && npm run format
check:
	cd client && npm run check
install-client:
	cd client && npm install
install-ci: # install projet dependencies for CI/CD environements
	cd client && npm ci
build: # build the application
	cd client && npm run build
test:
	cd client && npm run test
coverage:
	cd client && npm run coverage
install:
	make install-client
	make db-setup

db-setup:
	docker compose up db
start:
	docker compose up -d
	make launch-client
clean:
	docker compose down -v
