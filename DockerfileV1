# 1. Run 'yarn build'
# 2. Run docker-compose up --build -d
# 3. localhost:3000

FROM node:latest

LABEL author="Kiran Rambha"

WORKDIR /var/www

COPY build ./build

RUN npm install -g serve

CMD ["serve", "-s", "build"]