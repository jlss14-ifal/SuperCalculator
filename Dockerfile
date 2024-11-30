# Use the Node.js 23 base image with Alpine 3.19 for the build stage
FROM node:23-alpine3.19 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and the production environment file to the working directory
COPY package.json .env.prod ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install only production dependencies and clean the npm cache
RUN npm install --only=production && npm cache clean --force

# Remove all .js files from the dist/src directory
RUN find ./dist/src -name "*.js" -type f -delete

# Use the Node.js 23 base image with Alpine 3.19 for the final stage
FROM node:23-alpine3.19

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy necessary files from the build stage to the final image
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/dist/src/ ./dist/
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.env.prod ./.env

# Expose port 3000 for the application
EXPOSE 3000

# Command to run the application in production mode
CMD ["npm", "run", "start:prod"]