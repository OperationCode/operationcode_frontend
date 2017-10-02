# Dockerfile
FROM node:7

ENV IN_DOCKER true

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
# Remove node_modules
RUN rm -rf node_modules
# Install dependencies
RUN yarn install --no-progress

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

# defined in package.json
CMD [ "npm", "run", "start:server" ]
