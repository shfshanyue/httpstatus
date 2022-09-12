FROM node:12-alpine

WORKDIR /code
ADD package.json yarn.lock /code/
RUN yarn

ENV NODE_ENV=production

ADD . /code
RUN yarn build

EXPOSE 3000
CMD yarn start

