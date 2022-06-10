FROM node:14
WORKDIR /usr/src/app

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install jq curl --no-install-recommends \
    && apt-get autoremove -y && apt-get clean -y

COPY . .

RUN chmod +x docker-entrypoint.sh

EXPOSE 1337

RUN npm install
RUN npm run build
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "start"]