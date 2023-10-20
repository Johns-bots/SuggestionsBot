<h1 align="center">
Suggestion Bot
  <br>
</h1>


## Features

`!suggest`: Suggests a suggestion <br>
`!accept [messageID]` : Accepts a suggestion (Do not spam) <br>
`!decline [messageID]` : Declines a suggestion (Do not spam) <br>

## Get Started

# Create a config.json file

Add in the config.json file the following lines
``
{
    "prefix": "Your prefix",
    "main_token": "Your token",
    "developers": ["Your discordID"],
    "bot_name":"Suggestions", - Put anything
    "suggestion_channel_id":"Channel you want the message to be sent in",
    "bot_status": "dnd", You Can choose from: dnd, online, idle, offline 
    "bot_status_name": "Suggesting", Change this to what ever you want
    "bot_status_type": "LISTENING", You Can choose from: PLAYING, LISTENING, WATCHING, COMPETING, STREAMING 
    "logChannelID": "Your Log Channel"
  }
  ``

# Create .env file

Add in the .env file the following line

TOKEN=

Run npm i in terminal

run node index.js in terminal
test your commands
any errors make a pull request.

## To-Do's
Port to djs v14 with slash commands 
Maybe add modals?