FROM node:1.16-alpine
WORKDIR /home/node/server
COPY . .
RUN npm install
CMD ["node", "start"]
EXPOSE 3000