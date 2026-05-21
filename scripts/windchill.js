function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const windchillElement = document.getElementById("windchill");

// Only calculate if conditions are valid
if (temp <= 10 && speed > 4.8) {
  windchillElement.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  windchillElement.textContent = "N/A";
}
