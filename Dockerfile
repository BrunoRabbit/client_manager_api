FROM node:18
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install
RUN npm install -g ts-node

COPY . .

RUN ts-node setup.ts

COPY config/default.json config/

EXPOSE 3000

CMD ["npx", "nodemon", "main.ts"]