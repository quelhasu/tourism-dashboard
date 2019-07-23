FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 8000

CMD npm run build && npm run start
