function convertFromMtr() {
  let convertFeet = document.getElementById("feet").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertMeters = document.getElementById("meters").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToCentiMeters = convertMeters * 100;
  convertFeet = convertMeters / 3.28;
  convertToKilometers = convertMeters / 1000;
  convertToInches = convertMeters * 39.3701;
  convertToYards = convertMeters * 1.09;
  convertToMiles = convertMeters * 0.000621371;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("feet").value = convertFeet;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("yards").value = convertToYards;
  document.getElementById("miles").value = convertToMiles;
}
function convertFromCm() {
  let convertToFeet = document.getElementById("feet").value;
  let convertCentimeters = document.getElementById("centimeters").value;
  let convertToMeters = document.getElementById("meters").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertCentimeters / 100;
  convertToFeet = convertCentimeters / 30.48;
  convertToKilometers = convertCentimeters * 100000;
  convertToInches = convertCentimeters * 2.54;
  convertToYards = convertCentimeters * 91.44;
  convertToMiles = convertCentimeters / 160934;
  document.getElementById("meters").value = convertToMeters;
  document.getElementById("feet").value = convertToFeet;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("yards").value = convertToYards;
  document.getElementById("miles").value = convertToMiles;
}
function convertFromFt() {
  let convertToMeters = document.getElementById("meters").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertFeet = document.getElementById("feet").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertFeet * 3.28;
  convertToCentiMeters = convertFeet * 328;
  convertToKilometers = convertFeet * 3280;
  convertToInches = convertFeet * 0.08333;
  convertToYards = convertFeet * 0.0277778;
  convertToMiles = convertFeet * 0.000189394;

  document.getElementById("meters").value = convertToMeters;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("yards").value = convertToYards;
  document.getElementById("miles").value = convertToMiles;
}
function convertFromKm() {
  let convertToMeters = document.getElementById("meters").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertToFeet = document.getElementById("feet").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertToKilometers * 1000;
  convertToCentiMeters = convertToKilometers * 100000;
  convertToFeet = convertToKilometers * 3280;
  convertToInches = convertToKilometers * 39370.078;
  convertToYards = convertToKilometers * 1093.61;
  convertToMiles = convertToKilometers * 0.6214;

  document.getElementById("meters").value = convertToMeters;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("feet").value = convertToFeet;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("yards").value = convertToYards;
  document.getElementById("miles").value = convertToMiles;
}
function convertFromInches() {
  let convertToMeters = document.getElementById("meters").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertToFeet = document.getElementById("feet").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertToInches * 3.28;
  convertToCentiMeters = convertToInches * 328;
  convertToFeet = convertToInches * 3280;
  convertToKilometers = convertToInches * 0.08333;
  convertToYards = convertToInches * 0.0277778;
  convertToMiles = convertToInches * 0.000189394;

  document.getElementById("meters").value = convertToMeters;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("feet").value = convertToFeet;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("yards").value = convertToYards;
  document.getElementById("miles").value = convertToMiles;
}

function convertFromYards() {
  let convertToMeters = document.getElementById("meters").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertToFeet = document.getElementById("feet").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertToYards * 3.28;
  convertToCentiMeters = convertToYards * 328;
  convertToFeet = convertToYards * 3280;
  convertToKilometers = convertToYards * 0.08333;
  convertToInches = convertToYards * 0.0277778;
  convertToMiles = convertToYards * 0.000189394;

  document.getElementById("meters").value = convertToMeters;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("feet").value = convertToFeet;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("miles").value = convertToMiles;
}
function convertFromMiles() {
  let convertToMeters = document.getElementById("meters").value;
  let convertToCentiMeters = document.getElementById("centimeters").value;
  let convertToFeet = document.getElementById("feet").value;
  let convertToKilometers = document.getElementById("kilometers").value;
  let convertToInches = document.getElementById("inches").value;
  let convertToYards = document.getElementById("yards").value;
  let convertToMiles = document.getElementById("miles").value;

  convertToMeters = convertToMiles * 3.28;
  convertToCentiMeters = convertToMiles * 328;
  convertToFeet = convertToMiles * 3280;
  convertToKilometers = convertToMiles * 0.08333;
  convertToInches = convertToMiles * 0.0277778;
  convertToYards = convertToMiles * 0.000189394;

  document.getElementById("meters").value = convertToMeters;
  document.getElementById("centimeters").value = convertToCentiMeters;
  document.getElementById("feet").value = convertToFeet;
  document.getElementById("kilometers").value = convertToKilometers;
  document.getElementById("inches").value = convertToInches;
  document.getElementById("yards").value = convertToYards;
}
