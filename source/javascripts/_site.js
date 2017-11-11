// This is where it all goes :)
const shiny = document.querySelectorAll('.shiny');

let hue = 0;

setInterval(function () {
  shiny.forEach(item => {
    item.setAttribute('style', `text-shadow: 0px 0px 2rem hsl(${hue}, 100%, 50%)`);
  })
  hue > 358 ? hue = 0 : hue++;
}, 10);
