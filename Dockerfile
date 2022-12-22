FROM node:latest as final


# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

#Copy
COPY --chown=1001 package.json /app

# Adjust permissions
RUN npm install , chown -R 1001:1001 "/.npm" , chown -R 1001:1001 /app

# Configure entrypoint
ENTRYPOINT [ "npm", "run", "test" ]
