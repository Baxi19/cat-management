FROM node:16.10.0-buster as build
WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci --production
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /code/build /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]