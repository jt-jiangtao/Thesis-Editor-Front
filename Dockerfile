FROM arm64v8/nginx
COPY ./build/  /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
