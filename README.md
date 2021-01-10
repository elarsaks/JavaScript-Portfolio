# Solita

Repository for Solita job application

## Environments

Environment | URL  
Testing | http://35.228.187.83:8080/ && http://35.228.187.83:3001/
Development-local | http://localhost:8080/ && http://localhost:3001/

## Local development

### Prerequisites

- Docker
- Docker Composer

## Setup and Running

1. Download Solita project from GitHub
2. Run 'docker-compose up --build' in the project root
3. Wait until the application installs itself
4. Test it on on http://localhost:8080/ && http://localhost:3001/

## Architecture

<img src="https://s3.eu-north-1.amazonaws.com/elar-saks.info/Solita.png" />

### api

- Reads data from names.json file (provided by Solita) and feeds it into Postgres DB
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

### Client

- Fetches data api and displays it to the user
