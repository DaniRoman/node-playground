ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION} as base

EXPOSE 3000

ENV NODE_VERSION=${NODE_VERSION}

RUN apt-get update && apt-get install tini

WORKDIR /app

# Change ownership of /app to node user
RUN chown -R node:node /app

USER node

COPY package*.json ./

ENTRYPOINT [ "tini", "--" ]

FROM base as dev

ENV NODE_ENV=development
ENV PATH /app/node_modules/.bin/:$PATH

RUN npm ci --include=dev && npm cache clean -f

COPY . .

# RUN npx prisma migrate dev


CMD [ "nodemon", "--inspect=0.0.0.0:9229", "index" ]

# FROM base as test

# ENV NODE_ENV=development

# RUN npm ci --include=dev && npm cache clean -f

# COPY . .

# CMD [ "npm", "test" ]

