async function getDataByCountry(country) {
    const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0be3558b3bmshe68bb30d739a8c7p133a03jsn842b6215624a',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const dataContainer = document.getElementById('dataContainer');
      if (data.response && data.response.length > 0) {
        const countryData = data.response[0];
        document.getElementById('activeCases').textContent = countryData.cases.active;
        document.getElementById('newCases').textContent = countryData.cases.new;
        document.getElementById('recoveredCases').textContent = countryData.cases.recovered;
        document.getElementById('totalCases').textContent = countryData.cases.total;
        document.getElementById('totalDeaths').textContent = countryData.deaths.total;
        document.getElementById('totalTests').textContent = countryData.tests.total;
      } else {
        dataContainer.innerHTML = 'Data negara tidak ditemukan.';
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const getDataButton = document.getElementById('getDataButton');
  getDataButton.addEventListener('click', function () {
    const countryInput = document.getElementById('countryInput');
    const countryName = countryInput.value;
    getDataByCountry(countryName);
  });