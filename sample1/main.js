


getTally = () => {
  let tallyKey = '4MWYDKSuzH0Z0PRW4APa'
  axios.get('https://us-central1-tally-8c201.cloudfunctions.net/readTally?tallyKey=' + tallyKey)
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