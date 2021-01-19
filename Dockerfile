FROM node:14
WORKDIR /usr/src/app
COPY . .
EXPOSE 1337

RUN npm install
CMD ["npm", "run", "start"]