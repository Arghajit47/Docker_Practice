# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /workdir

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]