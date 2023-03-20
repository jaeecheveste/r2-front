# R2 FRONTEND APPLICATION
## _Folder Structure_



The idea is to decouple API from the frontend app and create contracts to interact with.
Components could be custom or only UI based. Custom components can interact with API through declared services. So the relation is:
Fibonacci Component --> Fibonacci Service (Contract) -> External API

## Installation

Install the dependencies and start the server.

Run in docker:
```sh
(inside project directory)
docker build . -t r2-front 
docker run --name r2-front -p 3000:3000 -d r2-front    
```
Run locally
```sh
npm i
npm start 
```
