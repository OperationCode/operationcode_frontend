NODE_CONTAINER := web

# Remove temporary files, build artifacts, and vendor dependencies (node_modules).
.PHONY: clean
clean: clean
	rm -rf node_modules

.PHONY: build
build:
	docker-compose build

.PHONY: build_site
build_site:
	yarn install && yarn run build

.PHONY: test
test:
	docker-compose run ${NODE_CONTAINER} bash -c 'cd /usr/src/app && yarn test'

publish: build
	bin/publish

deploy: build
	bin/deploy

travis: build_site build test

.PHONY: backend
backend:
	bin/run_backend.sh
