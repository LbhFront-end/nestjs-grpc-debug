FROM node:lts-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
        python \
        make \
        g++ \
&& yarn install \
&& apk del build-dependencies

COPY . .

RUN yarn build

FROM node:lts-alpine AS production

USER root
ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
        python \
        make \
        g++ \
&& yarn install --production\
&& apk del build-dependencies

COPY . .

COPY --from=development /usr/src/app/dist ./dist 

EXPOSE 3000
CMD ["node", "dist/main"]

