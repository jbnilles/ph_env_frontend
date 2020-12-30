Deployment is at https://jolly-sea-09482451e.azurestaticapps.net/
readme to be updated by jan 1 





My MVP was to create a web page where users could find other people, message with them and then play a game together with live multiplayer. To get to this I was going to create a database and api to handle the backend and then I would create a front end to display everything and connect them together. I created the db with sql server and the api is created using C# .net while the front end is using react/js with a little bit of bootstrap.

The main goal i had for this project was to get practice with creating and and using backend technologies. So in development of my project I did not using any external Api's, so other than some standard libraries(identity, Entity, ect) all fucntionality was designed by me. One of the challenges that I had was to have real time updates for playing the game and getting notifications of new messages. To solve this I did some long polling to make sure that the users had the most up to date information another was making sure users playing a game were both at the same state so i had to add some validation on the game states to make sure the users each had the same version. Another big challenge was connecting and disconnecting users at proper times(for example if one person drops).

I deployed the database, api and hosted the frontend Using Azure Web services. 

Further exploration for the games toi add more and add an ai so users can play against the computer, i would like to add a better match making system, I would like to implement a group chat feature(was not ready for presentation), the styling needs to be improved, and other ui elements could be tweeked a bit.

git hub repos: API https://github.com/jbnilles/ph-api-deployment    Front end: https://github.com/jbnilles/ph_env_frontend
GitHub
jbnilles/ph-api-deployment
Contribute to jbnilles/ph-api-deployment development by creating an account on GitHub.

GitHub
jbnilles/ph_env_frontend
Contribute to jbnilles/ph_env_frontend development by creating an account on GitHub.

Techs used: C# .net, React/js,  Azure Services, SQL Server,
Joseph Nilles12/23/2020
domain https://jolly-sea-09482451e.azurestaticapps.net/
React App
Web site created using create-react-app
must have a unique id
password must have  upper case lower case number and special character
to message someone both must have add each other
games expire if nobody joins after a period of time
let me know of any bugs if you test it out