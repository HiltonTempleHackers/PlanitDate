const express = require('express');
const router = express.Router(); 

var request = require("request");

router.post('/', (req, res) => {
    //client stuff
    var rating = '1';
    var price = '$$';
    var date = '02-23-2020';
    var day = 2;
    var term = 'french';
    var location = 'San%20Francisco,%20CA';

    //yelp stuff
    const key = 'Bearer JwDTfcunrW6e44vbCZU71-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx';
    // const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;

    date = new Date(date);
    console.log(date);
    day = date.getDay();
    console.log(day);


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

        var name = business['name'];
        var url = business['url'];
        var address = business['location']['display_address'];
        var phone = business['display_phone'];
        var transactions = business['transactions'];
        rating = business['rating'];
        price = business['price'];

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
                var open = parsedBody.hours[0].open;

                open = open.filter(time => day === time.day);

                var start = open[0].start;

                var end = open[0].end;

                res.send('Name: ' + name + ' || Address: ' + address + ' || Phone: ' + phone + ' || Other: ' + transactions + ' || Opening Time: ' + start + ' || Closing Time: ' + end);

            }
        })
    });

})

module.exports = router;