The database of Beyonce objects can be found in a JSON-server. If you haven't already done so install json-server:

TO INSTALL: npm install -g json-server

Then start the json-server:

TO START: json-server --watch db.json

1. Make a GET request to `http://localhost:3001/beys`. You should get a response that is an array of multiple book objects that look like this:
   `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false }`

- You have an api of Beyonce objects that have a key of "favorite" which defaults to false
- Your Beyonce objects are held in state in the BeyContainer

# Deliverables:

- Render a list of all Beyonce images
- When a User clicks on a Beyonce image it should change the "favorite" key, of that individual object to true or false depending on it's prior value
- Refactor so that all Beyonce objects whose `"favorite" === true` are rendered inside of the Favorites container and the BeyContainer

![beyonce gif](bey-slay.gif)
