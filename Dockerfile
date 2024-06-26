ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION} as prod

EXPOSE 3000

ENV NODE_VERSION=${NODE_VERSION}
ENV NODE_ENV=production

RUN apt-get update && apt-get install tini

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean -f
RUN npm install && npm cache clean -f

ENV PATH /app/node_modules/.bin/:$PATH

COPY . .

ENTRYPOINT [ "tini", "--" ]

CMD [ "node", "index" ]

FROM prod as dev

ENV NODE_ENV=development
RUN npm install && npm cache clean -f
CMD [ "nodemon", "--inspect=0.0.0.0:9229", "index" ]

FROM dev as test

ENV NODE_ENV=development
CMD [ "npm", "test" ]

