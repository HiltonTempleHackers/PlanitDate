// sends user input options to specified url and awaits a response (date location)
async function postUserData(url, data) {
  console.log('sending...');
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  return await response.json();
}