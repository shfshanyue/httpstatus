FROM node:18-alpine

RUN corepack enable
WORKDIR /code
ADD package.json pnpm-lock.yaml /code/
RUN pnpm i

ADD . /code
RUN pnpm build

EXPOSE 3000
CMD npm start
