# Dockerfile
FROM node:8.11.1

ENV IN_DOCKER true

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

# Set registry to NPM's in attempt to avoid build issues
RUN npm config set registry "https://registry.npmjs.org"

# Install front-end dependencies
RUN yarn install --no-progress

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

# defined in package.json
CMD [ "npm", "run", "start:server" ]
