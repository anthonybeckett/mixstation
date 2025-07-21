# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY .. .

# Expose the default Vite dev server port
EXPOSE 5173

# Run the dev server
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]
