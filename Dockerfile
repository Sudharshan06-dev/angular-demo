# Use the official Nginx base image
FROM nginx:latest

# Copy built Angular files to the Nginx HTML folder
COPY ./src/* /usr/share/nginx/html

# Expose port 80 to the Docker host
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
