





// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function convertCelsiusToFahrenheit() {
//   let celsiusInput = document.getElementById('celsius');
//   let fahrenheitResult = document.getElementById('fahrenheitResult');

//   let celsiusValue = parseFloat(celsiusInput.value);
//   if (!isNaN(celsiusValue)) {
//     let fahrenheitValue = celsiusToFahrenheit(celsiusValue);
//     fahrenheitResult.innerText = `Result: ${fahrenheitValue.toFixed(2)} °F`;
//   } else {
//     fahrenheitResult.innerText = "Invalid input";
//   }
// }

// function convertFahrenheitToCelsius() {
//   let fahrenheitInput = document.getElementById('fahrenheit');
//   let celsiusResult = document.getElementById('celsiusResult');

//   let fahrenheitValue = parseFloat(fahrenheitInput.value);
//   if (!isNaN(fahrenheitValue)) {
//     let celsiusValue = fahrenheitToCelsius(fahrenheitValue);
//     celsiusResult.innerText = `Result: ${celsiusValue.toFixed(2)} °C`;
//   } else {
//     celsiusResult.innerText = "Invalid input";
//   }
// }

// function convertKmToMile() {
//   const kilometerInput = document.getElementById('kilometerInput').value;
//   const mileResult = document.getElementById('mileResult');
//   const mileValue = kilometerInput * 0.621371;
//   mileResult.innerText = `${kilometerInput} Kilometers is equal to ${mileValue.toFixed(2)} Miles.`;
// }

// function convertMileToKm() {
//   const mileInput = document.getElementById('mileInput').value;
//   const kilometerResult = document.getElementById('kilometerResult');
//   const kilometerValue = mileInput / 0.621371;
//   kilometerResult.innerText = `${mileInput} Miles is equal to ${kilometerValue.toFixed(2)} Kilometers.`;
// }



// function kilogramToKilopound(kilogram) {
//   return kilogram / 0.453592; // 1 kilopound = 1000 pounds
// }

// function kilopoundToKilogram(kilopound) {
//   return kilopound * 0.453592; // 1 kilopound = 1000 pounds
// }

// function convertKgToKilopound() {
//   let kilogramInput = document.getElementById('kilogramToKilopoundInput');
//   let kilopoundOutput = document.getElementById('kilopoundOutput');

//   let kilogramValue = parseFloat(kilogramInput.value);
//   if (!isNaN(kilogramValue)) {
//     let kilopoundValue = kilogramToKilopound(kilogramValue);
//     kilopoundOutput.value = kilopoundValue.toFixed(2);
//   } else {
//     kilopoundOutput.value = "Invalid Input";
//   }
// }