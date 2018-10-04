FROM node:9.11.1-alpine

#install simple http server
#RUN npm install -g http-server
RUN npm install -g nodemon

#set the working directory
WORKDIR /app

#copy package.json and package-lock.json
#COPY code/package*.json ./

#install project dependencies
#RUN npm install

#copy project files and folders
COPY ./entrypoint.sh .
#COPY ./code .

#run the project
#RUN npm run build

EXPOSE 8081
#ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["nodemon"]
#CMD ["/bin/sh npm run dev"]

