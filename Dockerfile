FROM node:carbon
RUN npm i -g --unsafe-perm tars-cli
RUN cd /
RUN mkdir project
RUN cd /project
