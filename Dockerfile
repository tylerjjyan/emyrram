FROM node:16-alpine as build

RUN apk update && apk add nginx autoconf automake build-base gcc git

# Create app directory
COPY package.json yarn.lock /usr/src/app/
WORKDIR /usr/src/app
RUN yarn --network-concurrency=1

COPY --chown=node . /usr/src/app

# Build
# Change BUILD_ARGS accordingly
ARG BUILD_ENV
ARG NODE_ENV
ARG APP_PATH
ENV BUILD_ENV=${BUILD_ENV}
ENV NODE_ENV=${NODE_ENV}
ENV APP_PATH=${APP_PATH}

RUN npm run build

COPY docker/entrypoint.sh /entrypoint.sh
COPY docker/nginx.conf.template /etc/nginx/http.d/default.conf

#
# Run
#

EXPOSE 80
EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
