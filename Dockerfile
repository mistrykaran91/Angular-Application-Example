FROM node:alpine AS builder
WORKDIR './var/Angular-Application-Example'
COPY package.json
RUN npm install
COPY . .
RUN npm run build
 
FROM nginx
COPY --from=builder /var/Angular-Application-Example/dist/Angular-Application-Example/ /usr/share/nginx/html
