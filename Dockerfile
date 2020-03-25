### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV
ARG REACT_APP_STAGE=test
ENV REACT_APP_STAGE=$REACT_APP_STAGE

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker run -p 5001:80 -e NODE_ENV='development' -e REACT_APP_STAGE='staging' aegon-react
