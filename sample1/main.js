


getTally = () => {
  let tallyKey = 'Sbvpiwc8u4kO8Tf6Zy2z'
  axios.get('http://localhost:5001/tally-8c201/us-central1/readTally?tallyKey=' + tallyKey)
    .then(function (response) {

      // handle success
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = response.data.counter;
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

}