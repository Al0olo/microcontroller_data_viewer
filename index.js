const apiUrl = 'http://192.168.0.1/voltage';
const outputElement = document.getElementById('output');
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response);
    outputElement.innerHTML = response.best_time;
  })
  .then(data => {
    console.log(data);
    outputElement.textContent = JSON.stringify(data);
  })
  .catch(error => {
    console.error

('Error:', error);
  });