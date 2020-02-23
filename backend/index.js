const express = require('express');
const axios = require('axios');
var request = require("request");
const app = express();

// http://localhost:3000/
app.get('/', (req, res) => {
    const thingWeGet = req.body;
    const courseNames = ['hello', 'world', 'nice'];
    res.send(courseNames);
});

// /api/courses will be changed to our server
app.get('/api/courses', (req, res) => { //http://localhost:3000/api/courses
    const key = 'Bearer JwDTfcunrW6e44vbCZU71-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx';
    const term = 'restaurants';
    const location = 'Chelsea,%New%York';
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
  
    /*axios({
        'url': url,
        'method': 'GET',
        'headers' : {
            'Authorization': key
        }
    })
    .then(function(response) {
        res.send(response)
        // console.log(someBoolean)
    })
    .catch(function (error) {
        console.log(error);
    });*/

    /*axios.create({
        headers:{
            Authorization: key,
            
        }
    })
    .get('https://api.yelp.com/v3/businesses/search?term=restaurants&location=Chelsea,%New%York')
    .then(resp => res.send(resp))
    .catch(err => console.log(err));*/

    /*axios.get(url, {
        headers: {
          "Authorization": key
        }
      })
    .then(resp => res.send(resp))
    .catch(err => console.log(err));*/

    var options = { method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs: { term: 'restaurants', location: 'Chelsea,%25New%25York' },
        headers: { 
            Authorization: 'Bearer JwDTfcunrW6e44vbCZU71-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx' 
        } 
    };

    request(options, function (error, response, body) {
        if (error) {
            throw new Error(error)
            console.log('error');
        } else {
            //console.log(response);
            res.send(body);
        };
    });
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}....`));
