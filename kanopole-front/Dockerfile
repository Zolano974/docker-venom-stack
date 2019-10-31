FROM node:9.11.1-alpine

RUN npm install -g nodemon

COPY ./entrypoint.sh /entrypoint/

RUN chmod +x /entrypoint/entrypoint.sh

WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["nodemon"]

