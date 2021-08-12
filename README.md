# JavaScript Portfolio

This repository serves as an example of my current skill level with full-stack JavaScript


## Architecture

<img src="https://s3.eu-north-1.amazonaws.com/elar-saks.info/full-stack.js-arhitecture.png" />

## Testing

### Cloud
API-ENDPOINT | URL  
Vue-client | http://javascript-portfolio-vue-client.s3-website.eu-north-1.amazonaws.com/  
React-client | http://javascript-portfolio-react-client.s3-website.eu-north-1.amazonaws.com/  
Api (Node JS) | Back-end kept getting hacked by crypto miners and is therefore down. 

### Local
API-ENDPOINT | URL  
Vue-client | http://localhost:8080/  
React-client | http://localhost:3000/  
Api (Node JS) | http://localhost:3001/  

## Local development

### Prerequisites

- Docker
- Docker Composer

## Setup and Running

1. Download project from GitHub
2. Run 'docker-compose up --build' in the project root
3. Wait until the application installs itself
4. Test it on on http://localhost:8080/ && http://localhost:3000/ && http://localhost:3001/

### api

- Reads data from names.json file and feeds it into Postgres DB
- Receives requests from client
- Checks if Redis has requested data and serves it to the client.
- If Redis doesn't have data:
  1. Fetches requested data from the Postgres
  2. Serves it to the client
  3. Updates Redis with requested data

### Postgres

- Stores names data in 1 single 'names' table

### Redis

- Stores names data for 5 minutes at a time

### Vue-client

- Fetches data api and displays it to the user

### React-client

- Fetches data api and displays it to the user
