# CRUD App (CRA)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Goals

- Gain experience using create-react-app (CRA)
- Gain experience in setting up front end (client) & back end (server) "from scratch"
- Play around with project architecture (e.g. folders, index.js files, etc.) to improve personal "best practices"
- Gain experience with Fetch API (previously only used axios)

## End Goal

- Have improved "best practices" for project architecture + have created any related snippets (for future efficiency)

## Minimal-To-No Concern Given To

- UI/UX

## Getting Started:

- Create .env files (client, server)
  - Client
    - BACKENDURL = http://localhost:4000
  - Server
    - PORT=4000
    - DATABASE_URL=mongodb+srv://username:password@clusterName.mongodb.net/databaseName?retryWrites=true&w=majority (mongodb example)
    - JWTSECRET=enterJWTSecretHere
- (Prisma) Re-establish link between schema.prisma & .env file
  - npx prisma generate

## How To

- To swap HTTP Clients, uncomment desired client within `/services/index.js`
  - Currently available:
    - Axios API
    - Fetch API

- To swap backends (databases and "routing/database handlers"), uncomment desired backend within `/server/router/index.js`
  - Currently available:
    - **REST API**
      - Mock database (local JSON file)
      - MongoDb
      - Prisma (wrapping MongoDb)
    
  - `#TODO`
    - TypeScript conversions (all options, or at least Prisma options)
  
  - No longer attempting, currently
    - **tRPC API**
      - tRPC / Prisma+tRPC (too big of an architecture change and too unfamiliar with tRPC... consider again in the future)