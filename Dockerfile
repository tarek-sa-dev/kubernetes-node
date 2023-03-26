FROM node:16-alpine3.15
RUN mkdir -p /usr/src/node-app/
WORKDIR /usr/src/node-app/
COPY package*.json /usr/src/node-app/
RUN npm install
COPY . /usr/src/node-app/
EXPOSE 5005
CMD ["node", "index.js"]