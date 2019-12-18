FROM node:10-alpine

LABEL maintainer="Md. Fahim Shahrier Rasel <fahimshahrier2@gmail.com>"

# App Working Directory
WORKDIR /app

# Copy and Install Dependencies
COPY package.json /app/
RUN yarn

# Copy Everything to Working Directory
COPY . .
COPY .env.example /app/.env

EXPOSE 3000