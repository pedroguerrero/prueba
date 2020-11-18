FROM node:14.15.1-alpine3.11
ADD . /app
WORKDIR /app
RUN npm install --only=prod
EXPOSE 3000
CMD ["/usr/local/bin/npm", "start"]
