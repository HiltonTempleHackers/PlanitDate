const express = require('express');
const router = express.Router();
const DateModel = require('./dateModel.js');
const request = require('request');
router.get('/', (req, res) => {
    //client stuff
    const {state, city, popularity, priceRange, date, food} = req.body;
    const rating = '1';
    const price = '$$';
    const date1 = 'MM-DD-YYYY';
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

            let filteredBusiness = businessesJS.businesses.filter(business => business.categories.filter(category => {
                if (category.alias === term) {
                    return true;
                }
            }));

            filteredBusiness = filteredBusiness.filter(business => price === business.price);

            filteredBusiness = filteredBusiness.filter(business => rating <= business.rating);

            let length = filteredBusiness.length;

            let index = Math.floor((Math.random() * length) + 1);

            console.log(index);

            var business = filteredBusiness[index];

        };

        const id = business.id;

        let oneOption = {
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
                let start = parsedBody.hours[0].open;

                start = start.filter(time => day === time.day)

                DateModel.getQuestions().then(response => {
                    res.send("" + start + "\n" + res.status(201).json(start));
                    //res.status(201).json(response);
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({err: "Sorry. The server experienced an error."});
                });
            }
        })

    });

});

module.exports = router;