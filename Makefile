NODE_CONTAINER := web

.PHONY: build
build:
	docker-compose build

.PHONY: test
test:
	docker-compose run ${NODE_CONTAINER} bash -c 'cd /usr/src/app && yarn test'

publish: build
	bin/publish

travis: build test

