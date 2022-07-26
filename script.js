window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response){

    // .json() is also asynchronous 
    response.json().then(function(data){
      console.log(data);

      let html = `
      <h3>Weather for ${data.zipcode}:</h3>
      <ul>
        <li>Conditions: ${data.status}</li>
        <li>Current temp: ${data.temp}</li>
        <li>Chance of precipitation: ${data.chanceOfPrecipitation}</li>
      </ul>
      `;

      document.getElementById("weather-conditions").innerHTML = html;

    });
  });

// alternative asynchronous approach
// fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response){

//   // .json() is also asynchronous 
//   return response.json(); // returns a Promise object
  
// }).then(function(data){
//   console.log(data);

//   let html = `
//   <h3>Weather for ${data.zipcode}:</h3>
//   <ul>
//     <li>Conditions: ${data.status}</li>
//     <li>Current temp: ${data.temp}</li>
//     <li>Chance of precipitation: ${data.chanceOfPrecipitation}</li>
//   </ul>
//   `;

//   document.getElementById("weather-conditions").innerHTML = html;

// });

  });