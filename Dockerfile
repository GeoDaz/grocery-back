FROM node:20-alpine

RUN apk update && apk add -y openssl

WORKDIR /

# COPY package*.json ./

# RUN npm install

COPY . .

RUN npm run start:dev

CMD [ "npm", "run", "start:dev" ]