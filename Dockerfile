FROM debian:9

RUN apt-get update \
    && apt-get install -y \
    curl \
    gnupg \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g grunt-cli

EXPOSE 8080