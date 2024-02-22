
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove "a", "an", "the" from a band name
function strip(bandName) {
  return bandsName.replace(/^(a |the |an )/i, '').trim();
}

// Sort the bands
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Display the sorted bands in the webpage
document.querySelector('#bands').innerHTML =
  sortedBands.map(band => `<li>${band}</li>`).join('');