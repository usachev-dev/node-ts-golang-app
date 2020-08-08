FROM node:14.7.0-alpine
COPY . /app
WORKDIR /app
RUN yarn install
EXPOSE 80
RUN yarn run build
CMD ["yarn", "run", "start"]