FROM node:18
WORKDIR /usr/src/app
COPY . .
EXPOSE 1337

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]