# Use the official Apache HTTP Server image from the Docker Hub
FROM httpd:latest

# Copy a custom 'index.html' into the Apache server's root directory for hosting
COPY ./docs/* /usr/local/apache2/htdocs/

# Expose port 80 to the Docker host
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
