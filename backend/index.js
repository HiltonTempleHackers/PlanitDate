const express = require('express');
//const axios = require('axios');
var request = require("request");
const app = express();
let sentinel = false;


// http://localhost:3000/
app.get('/', (req, res) => {
    const thingWeGet = req.body;
    const courseNames = ['hello', 'world', 'nice'];
    res.send(courseNames);
});

app.get('/api/courses', (req, res) => { //http://localhost:3000/api/courses
    //client stuff
    const foodOrActivity = '';
    const rating = '1';
    const price = '$$';
    const date = 'MM-DD-YYYY';
    // const start = '';
    // const end = '';
    const day = 2;
    const term = 'french';
    var list = [];

    const location = 'San%20Francisco,%20CA';

    //yelp stuff
    const key = 'Bearer JwDTfcunrW6e44vbCZU71-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx';
    // const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;

    var options = { 
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs: { term: term, location: location },
        headers: { 
            Authorization: key 
        } 
    };

    request(options, function(error, response, body) {
        if (error) {
            throw new Error(error)
            console.log('error');
        } else {
            //console.log(response);

            const businessesJS = JSON.parse(body);

            var filteredBusiness = businessesJS.businesses.filter(business => business.categories.filter(category => {
                if (category.alias === term) {
                    return true;
                }
            }));

            filteredBusiness = filteredBusiness.filter(business => price === business.price);

            filteredBusiness = filteredBusiness.filter(business => rating <= business.rating);

            sentinel = true;
            
            var length = filteredBusiness.length;

            var index = Math.floor((Math.random() * length) + 1);

            console.log(index);

            var business = filteredBusiness[index];

        };

        const id = business.id;

        var oneOption = { 
            method: 'GET',
            url: `https://api.yelp.com/v3/businesses/${id}`,
            headers: { 
                Authorization: key 
            } 
        };

        request(oneOption, function(error2, response2, body2) {
            if (error2) {
                throw new Error(error2)
                console.log('error');
            } else {
                const parsedBody = JSON.parse(body2);
                var start = parsedBody.hours[0].open;

                start = start.filter(time => day === time.day)

                res.send(start);
            }
        })



        // if (sentinel) {


            // for(var i = 0; i <= 10; i++) {
            //     var business = filteredBusiness[i];
            //     console.log(business);
            //     var lessOptions = { 
            //         method: 'GET',
            //         url: `https://api.yelp.com/v3/businesses/${business.id}`,
            //         headers: { 
            //             Authorization: key 
            //         } 
            //     };

                // request(lessOptions, function(error2, response2, body2) {
                //     if (error2) {
                //         throw new Error(error2)
                //         console.log('error');
                //     } else {
                //         const parsedBody = JSON.parse(body2);
                //         list.push(parsedBody);
                //         console.log(list);
                //     }
                // })
            // }



            // filteredBusiness.forEach(business => {
            //         var lessOptions = { 
            //             method: 'GET',
            //             url: `https://api.yelp.com/v3/businesses/${business.id}`,
            //             headers: { 
            //                 Authorization: key 
            //             } 
            //         };

            //         setTimeout(() => {
            //             request(lessOptions, function(error2, response2, body2) {
            //                 if (error2) {
            //                     throw new Error(error2)
            //                     console.log('error');
            //                 } else {
            //                     const parsedBody = JSON.parse(body2);
            //                     list.push(parsedBody);
            //                     console.log(list);
            //                 }
            //             })
            //         }, 3000);          
            // })
        // };     
    });

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}....`));
