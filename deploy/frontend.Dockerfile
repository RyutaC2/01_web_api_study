FROM node:20-alpine

WORKDIR /app

COPY front_end/package*.json ./
RUN npm ci && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npx", "next", "dev", "-H", "0.0.0.0"]