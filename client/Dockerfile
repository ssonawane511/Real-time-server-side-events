FROM node:18-alpine3.18

WORKDIR /app

COPY . /app

RUN npm install --legacy-peer-deps

ENV NAME IOT frontend

CMD ["npm", "start"]