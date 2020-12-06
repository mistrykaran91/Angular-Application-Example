FROM node:alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
 
FROM nginx
COPY --from=builder /app/dist/Angular-Application-Example/ /usr/share/nginx/html
