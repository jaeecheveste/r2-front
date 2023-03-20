# R2 FRONTEND APPLICATION

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

## _Folder Structure_
```sh
 - src
      /api
         fibonacci.service.tsx
      /components
         /fibonacci
             fibonacci.tsx
             fibonacci.css
         /layout
         /forms
         /table
         /snackbar
      /pages
         HomePage.tsx
      /utils
         Request.ts
```
The main idea here is to decouple API from the rest of the application.
API will contain all services that interact with External APIs. In order to decouple code, there are interfaces in each service.

Components could be custom or UI based. Custom components can interact with API through declared services.
Fibonacci Component --> Fibonacci Service (Contract) -> External API. Then, we have UI based components, which receives/send some information to custom components and render in the UI. 

If we use an external dependency, we need to keep it decoupled from the code.

This small application does not require to manage state such as redux, context. 
