FROM node:latest

RUN mkdir -p /tracklift/frontend
WORKDIR /tracklift/frontend
COPY . .
RUN npm install
EXPOSE 3000
CMD npm run start
