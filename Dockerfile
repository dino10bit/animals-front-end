FROM node:alpine

ENV NODE_ENV='production'
ENV SERVER_URL='http://localhost:8080/graphql'

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app
RUN yarn build
RUN yarn apollo:generate-types
EXPOSE 3000
CMD [ "yarn", "prod" ]
