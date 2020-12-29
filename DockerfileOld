FROM node:latest

LABEL author="Kiran Rambha"

ENV NODE_ENV=production

ENV PORT=3000

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE ${PORT}

ENTRYPOINT ["yarn", "start"]