FROM node:12-alpine

WORKDIR /usr/lib/serve-spa
COPY ./default-public /usr/share/public

COPY package*.json ./
RUN npm install --production
COPY ./src/ ./src/

EXPOSE 8080

CMD [ "node", "src/index.js" ]
