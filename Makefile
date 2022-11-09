help: # Magic trick to gather command comments into a handy help message.
	@grep -E '^[a-zA-Z_-]+:.*?#- .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?#- "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

launch-client: # start SvelteKit Server
	cd client && npm run dev -- --open
format: # format code to match with project code standards
	cd client && npm run format
check: # run linters on code base
	cd client && npm run check
install: # install project dependencies
	cd client && npm install
install-ci: # install projet dependencies for CI/CD environements
	cd client && npm ci
build: # build the application
	cd client && npm run build
test:
	cd client && npm run test
test-unit:
	cd client && npm run test-unit
coverage:
	cd client && npm run coverage
