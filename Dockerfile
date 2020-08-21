FROM node:12

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY ./src .
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]