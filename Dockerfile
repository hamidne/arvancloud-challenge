# Dockerfile
FROM node:14-alpine

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# install packages
COPY package.json .
COPY yarn.lock .
RUN yarn install

# copy project to directory
COPY . .
RUN yarn build

EXPOSE 3000
ENV NUXT_PORT=3000
ENV HOST 0.0.0.0

CMD [ "yarn", "start" ]
