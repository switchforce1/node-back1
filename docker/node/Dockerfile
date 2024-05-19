FROM node:22-alpine

USER root
RUN apk update
RUN apk upgrade
RUN apk add curl

WORKDIR /app

EXPOSE 3050

ENTRYPOINT ["tail", "-f", "/dev/null"]