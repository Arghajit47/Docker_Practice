FROM nginx
COPY Basics.html /usr/share/nginx/html/index.html
CMD ["nginx", "-g", "daemon off;"]