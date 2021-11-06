#create new image for container creation

FROM node
#set image(copy files for image)
WORKDIR /app

COPY package.json /app
#build node_moduels folder acording package.json file(RUN will run when we build our image)
#
RUN npm install

COPY . .

ENV PORT 4200

#set port outside of app
EXPOSE $PORT

#start application(CMD will start always when we start this image)
CMD ["node", "index.js"]
