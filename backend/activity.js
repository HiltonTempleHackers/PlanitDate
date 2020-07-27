const express = require('express');
const router = express.Router();

var request = require("request");


router.get('/', (req, res) => {
    //client stuff
    var aRating = '1';
    var aDate = '02-23-2020';
    var aDay = 2;
    var aTerm = 'mini_golf';
    var aLocation = 'Philadelphia,PA';

    aDate = new Date(aDate);
    console.log(aDate);
    aDay = aDate.getDay();
    console.log(aDay);

    //yelp stuff
    const key = 'Bearer JwDTfcunrW6e44vbCZU71-qTTn2JQHCB8U2xfl3xZ6UrPl5VwzPQrg5F_auwixaTdSIe8-FKuPew9_qzbFBjokLyy83EL7GmlKl6aNuEXqJguv1fYCMyoOVGypZRXnYx';
    // const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;

    var options = { 
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs: { term: aTerm, location: aLocation },
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

            const activityJS = JSON.parse(body);

            var filteredActivity = activityJS.businesses.filter(activity => activity.categories.filter(aCategory => {
                if (aCategory.alias === aTerm) {
                    return true;
                }
            }));

            filteredActivity = filteredActivity.filter(activity => aRating <= activity.rating);
            
            var aLength = filteredActivity.length;

            var aIndex = Math.floor((Math.random() * aLength) + 1);

            console.log(aIndex);

            var activity = filteredActivity[aIndex];

        };

        var aName = activity['name'];
        var aUrl = activity['url'];
        var aAddress = activity['location']['display_address'];
        var aPhone = activity['display_phone'];
        var aTransactions = activity['transactions'];
        aRating = activity['rating'];

        const id = activity.id;

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
                var aOpen = parsedBody.hours[0].open;
                aOpen = aOpen.filter(aTime => aDay === aTime.day);

                res.send('Name: ' + aName + ' || Phone: ' + aPhone + ' || Address: ' + aAddress);
                
                // res.send(activity);
            }
        })
    });

})

module.exports = router;