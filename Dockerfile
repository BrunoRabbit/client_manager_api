FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm install -g ts-node

COPY . .

RUN ts-node setup.ts
RUN npm run

EXPOSE 3000

CMD [ "node", "dist/main.ts" ]