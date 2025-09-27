# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json & lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
