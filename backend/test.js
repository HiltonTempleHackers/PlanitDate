const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.yelp.com/v3/businesses/search');
    xhr.send()
}