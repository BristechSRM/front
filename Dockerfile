FROM node

RUN npm install -g webpack 
RUN npm install -g gulp
RUN npm config set bin-links true

VOLUME ["/code/build"]

COPY . /code

RUN cd /code && ls && npm install

WORKDIR /code
CMD ["gulp","build"]
