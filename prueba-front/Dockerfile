FROM node:14.15.1-alpine3.11 as base
ADD . /app
WORKDIR /app
RUN yarn --prod
RUN yarn build

FROM nginx:1.19.4-alpine
COPY --from=base /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
