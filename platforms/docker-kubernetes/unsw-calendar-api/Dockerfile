FROM node:24-alpine AS builder
WORKDIR /unsw-calendar-api
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:24-alpine
WORKDIR /unsw-calendar-api
COPY --from=builder /unsw-calendar-api/dist ./dist
COPY --from=builder /unsw-calendar-api/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]