# Dev environment
FROM node:15 as dev
USER node
VOLUME [ "/app" ]
WORKDIR /app/code

# build environment
FROM node:15-alpine as build
RUN mkdir /app
COPY code /app/code
WORKDIR /app/code
RUN npm ci
RUN ls
RUN npm run build

# production environment
FROM nginx:1.19-alpine as production
COPY --from=build /app/code/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
