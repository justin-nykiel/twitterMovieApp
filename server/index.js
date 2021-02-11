const express = require('express');
const path = require('path');
const app = express();


const needle = require('needle');
require('dotenv').config();
const token = process.env.BEARER_TOKEN;
console.log(token)

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

// a test route to make sure we can reach the backend
//this would normally go in a routes file
require('./controllers/twitter')(app)
app.get('/test', (req, res) => {
    async function getRequest() {
        // Edit query parameters below
        // specify a search query, and any additional fields that are required
        // by default, only the Tweet ID and text fields are returned
        const params = {
            'query': 'star wars movie is:verified',
            'tweet.fields': 'author_id,attachments'
        }
    
        const res = await needle('get', endpointUrl, params, {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    
    (async () => {
    
        try {
            // Make request
            const response = await getRequest();
            console.log(response);
    
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();
    res.send('Welcome to the backend!')
})
//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);