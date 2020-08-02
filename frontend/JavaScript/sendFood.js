// spaghetti for now, I just want to get the http req working
// will need to: send user input, receive back-end response, 
// route user to landing page, somehow get the data to that page to be displayed
async function sendFood(data) {
    let resp = await postUserData('http://localhost:3000/api/food', data)
    .catch(e => console.log(e));
    console.log(resp);
    // return resp?
}