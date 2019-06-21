:doc:`Home </index>` | :doc:`Express <./index>`

Git GitHub Deploy
=================

Track with Git
--------------

Having created a directory (with or without contents such as an Express app) you can set up git to track any changes in the directory. Create a .gitignore file containing files and directories you do not want to track. For an express app this would include the node_modules directory and any config files that contain sensitive data such as passwords. Now issue the ``git init`` command from the root directory. Then issue  ``git add .`` followed by ``git commit``.

Connect to Github
-----------------

Create a new repo in `Github` with the same name as the root directory of your local git repo. This is the name of the app you have created. After creating a repo on Github you are presented with several options. The one of interest here is labelled `...or push an existing repository from the command line`. Copy the first command and issue it from the root of your local repo and then do the same with the second line. These two lines are ``git remote add origin https://github.com/stevespages/dev-with-steve.git`` and ``git push -u origin master``.

From now on regularly run ``git add .``, ``git commit -m "description of changes since last commit"`` and ``git push``.

Deploy at Heroku
----------------

Sign into your Heroku account and create a new app with the name of your app. Do not add to pipeline. Choose GitHub as the deployment method. Connect the GitHub repo. Click on the `Enable Automatic Deploys` button. Select `Settings` and add the config variable `NODE_ENV` with a value of `production`. Add a Procfile to the root of your app with the contents with the command for starting your app: ``web: node bin/www``. The command for an ordinary Express App (as opposed to an Express Application Generator app) would be ``web: node app.js``. Commit and push to Github. Access the app at http://name-of-app.herokuapp.com.

From now on when you push changes to your app to GitHub they will be incorporated into the app hosted at Heroku.
