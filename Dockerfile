# Just run docker-compose up --build -d

FROM node:latest

LABEL author="Kiran Rambha"

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

RUN npm install -g serve

CMD ["serve", "-s", "build"]