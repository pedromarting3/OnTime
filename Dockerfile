
FROM node:latest as final


# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

# Cambia permisos
COPY --chown=1001 package.json /app/test

# Adjust permissions
RUN npm install ; npm install -g grunt --save-dev ; npm install -g grunt-cli ; npm install -g jest ; npm install -g grunt-exec --save-dev ; chown -R 1001:1001 "/.npm" ; chown -R 1001:1001 /app/test

# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
