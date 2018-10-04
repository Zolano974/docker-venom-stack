FROM node:9.11.1-alpine

#install simple http server
RUN npm install -g nodemon

COPY ./entrypoint.sh /entrypoint/

RUN chmod +x /entrypoint/entrypoint.sh

WORKDIR /app

EXPOSE 8081

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["nodemon"]

