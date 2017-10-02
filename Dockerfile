# Dockerfile
FROM node:7

ENV IN_DOCKER true

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install --no-progress

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

# defined in package.json
CMD [ "npm", "run", "start:server" ]
