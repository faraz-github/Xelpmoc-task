Xelpmoc-task
========

### Usage ###

To use this full stack project you have clone the repo and install the dependencies, after that 
you can run Backend or Frontend with the given script.

```sh

#### Cloning ####
git clone https://github.com/faraz-github/Xelpmoc-task.git
#### Installing Dependencies ####
cd root > npm install
cd frontend > npm install
#### Running Application ####
npm run server
npm run client

```


### Scripts Development Mode ###

With the help of these scripts backend and frontend starts using the devDependency of [nodemon](https://nodemon.io/)
also for the Frontend to communicate with the backend port easily we use `proxy`

```sh
BACKEND Package.json
"scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend"
  },
FRONTEND Package.json
"proxy": "http://localhost:5000",
```