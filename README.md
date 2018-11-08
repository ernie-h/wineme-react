# wineme-react

## Set-up
Please run this to update your `package.json` file which keeps track of your dependencies

`npm i --save`

## Starting react app
Type this into your command line inside the project dir to start the react app on `localhost:3000`

`npm start`

## Deploying to Heroku

You can deploy to Heroku through your command line with these commands.

First login to Heroku.

`heroku login`

Then add this heroku remote to your git remotes.
`heroku git:remote -a https://git.heroku.com/wine-me-server.git`

Then push your heroku master branch to heroku
`git push heroku master`

**ALWAYS MAKE SURE YOU HAVE PULLED MASTER AND HAVE THE MOST UPDATED BEFORE DEPLOYING TO HEROKU**
