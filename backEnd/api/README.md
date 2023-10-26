<b>Following is the order of commands to execute to run the backend:</b><br>
1 - npm install <br>
2 - docker-compose up -d <br>
3- npm run build <br>
4 - npm run start (run official mode) <br>
4 - npm run start-dev (run developer mode) <br>
4 - npx prisma migrate dev --name init <br>
5 - npx prisma db seed -- --environment development <br>

The database and its client are running on docker, to access the database use the following url:<br>
localhost:5050<br>
user: admin@gmail.com<br>
password: admin<br>

<b>OBSERVATION:</b><br>
To run Docker on a Windows system, follow the steps in the following tutorial:
https://gist.github.com/sidneyroberto/5f0b837c2d27f791fc494c164d2a7d74
