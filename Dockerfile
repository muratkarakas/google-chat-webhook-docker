FROM node:alpine
ADD index.js .
ADD package.json .
ADD package-lock.json .
ADD send.sh .
CMD chmod +x send.sh
RUN npm i
ENTRYPOINT [ "./send.sh"]