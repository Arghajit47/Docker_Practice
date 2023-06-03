# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /workdir

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install --production --frozen-lockfile

# Copy the application code to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Set the command to run the application
CMD ["yarn", "start"]
