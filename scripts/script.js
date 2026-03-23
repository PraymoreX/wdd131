document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215*tempC - 11.37*Math.pow(speedKmh, 0.16) + 0.3965*tempC*Math.pow(speedKmh,0.16);
}

let temperature = 5;
let windSpeed = 10; 

let windChillOutput = (temperature <= 10 && windSpeed > 4.8) ? 
                      Math.round(calculateWindChill(temperature, windSpeed)) + "°C" :
                      "N/A";

document.getElementById("windChill").textContent = windChillOutput;
document.getElementById("temperature").textContent = temperature + "°C";
document.getElementById("windSpeed").textContent = windSpeed + " km/h";