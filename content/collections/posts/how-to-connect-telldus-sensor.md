---
title: How to fetch information from your Telldus sensor with NodeJS via Telldus Live API
date: "2018-09-17T15:00:00.000Z"
slug: how-to-connect-telldus-sensor
---

### Getting started
Do you have a Telldus sensor and a Telldus account? Do you want to fetch information from the sensor and do fun stuff with that information?

Then read on! Teach you, I will.

![cats](https://media.giphy.com/media/1QLhxpMVDeoy4/giphy.gif)

Perhaps you have visited the [Telldus API documentation](http://api.telldus.com/documentation/live) page. I'm sorry all Telldus people out there, but that documentation is awful.

I'll show you the basic requests which can be done and also how you could implement that in NodeJS. We have a few endpoints to choose from.

``` bash
https://api.telldus.com/json/devices/list
https://api.telldus.com/json/device/info?id=12345
https://api.telldus.com/json/sensors/list
https://api.telldus.com/json/sensor/info?id=12345
https://api.telldus.com/json/events/list
...
```

But first, let's start a little NodeJS application.

``` bash
mkdir my-telldus-app
cd my-telldus-app
npm init
npm install express oauth body-parser --save
touch index.js
touch api.js
```

Okay, nice, now we have an app with some basic dependencies with an entry point `index.js`.

Add the following to `index.js`:

```javascript
const express = require("express");
const app = express();

// This is the API.
app.use(require('./api'));

app.listen(8080);
console.log("App listening on port 8080");
```
### Authenticating with OAuth
Did you see that we required `"./api.js"` there? We added that file before. That's where we'll write our backend API routes, so that these can be queried by our frontend later.

```javascript
const express = require("express");
const router = express.Router();
const OAuth = require("oauth");

// Add your own info here. You can get your keys when you login to Telldus.
const publicKey = "";
const privateKey = "";
const token = "";
const secret = "";
base = "https://api.telldus.com/json";

// You will add code here later.

module.exports = router;
```

Now we need to authenticate with OAuth. Add a function to `api.js`:

```javascript
function getOauth() {
    return new OAuth.OAuth(
        base + "/oauth/requestToken",
        base + "/oauth/accessToken",
        publicKey, privateKey, '1.0', null, 'HMAC-SHA1');
}
```

That will take care of the OAuth authentication for us, so we're ready to write our first Telldus API call.

### Making API calls

```javascript
router.get("/devices/list", function (request, response) {
        getOauth().get(
            base + "/devices/list",
            token,
            secret,
            function (error, data, res) {
                if (error) console.error(error);
                const jsonData = JSON.parse(data);
                console.log(jsonData);
                response.send(jsonData);
            });
    }
);
```

Now, open your browser and go to `http://localhost:8080/devices/list`. If it worked, you'll see an API response!

![yay](https://media.giphy.com/media/5wWf7H0WTquIU1DFY4g/giphy.gif)