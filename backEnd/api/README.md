Following is the order of commands to execute to run the backend:
1 - npm install
2 - docker-compose up -d
3- npm run build
4 - npm run start (run official mode)
4 - npm run start-dev (run developer mode)
4 - npx prisma migrate dev --name init
5 - npx prisma db seed -- --environment development

The database and its client are running on docker, to access the database use the following url:
localhost:5050
user: admin@gmail.com
password: admin

OBSERVATION:
To run Docker on a Windows system, follow the steps in the following tutorial:
https://gist.github.com/sidneyroberto/5f0b837c2d27f791fc494c164d2a7d74
