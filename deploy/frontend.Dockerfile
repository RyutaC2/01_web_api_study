FROM node:20-alpine

WORKDIR /app

COPY front_end/package*.json ./
RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]