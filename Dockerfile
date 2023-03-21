FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV R2_BACK=http://localhost:8080
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
ENV R2_BACK=http://localhost:8080

# start app
CMD ["npm", "start"]