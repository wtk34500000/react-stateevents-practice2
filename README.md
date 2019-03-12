The database of Beyonce objects can be found in a JSON-server. If you haven't already done so install json-server:

TO INSTALL: npm install -g json-server

Then start the json-server:

TO START: json-server --watch db.json

1. Make a GET request to `http://localhost:3001/beys`. You should get a response that is an array of multiple book objects that look like this:
   `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false}`

# Deliverables:

- Render a list of all Beyonce images
- When a User clicks on a Beyonce image it should remove that object from state (i.e. we are not making a DELETE fetch request)

![beyonce gif](bey-slay.gif)
