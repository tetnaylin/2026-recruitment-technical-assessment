FROM node:24-alpine
WORKDIR /src
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]