FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install \
    npm install --only=dev --silent 
    
COPY . /usr/src/app

EXPOSE 3000