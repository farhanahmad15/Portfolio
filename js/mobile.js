const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("name").onclick = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 100);
}


const colorPalette = ['#000000', '#6a040f', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'];

const element = document.getElementById('footer');
const originaltext = element.textContent;
const originalColors = [];

// Create a new HTML string with random colors from your palette for each letter
const coloredText = Array.from(originaltext).map((letter, index) => {
    const colorIndex = Math.floor(Math.random() * colorPalette.length);
    const color = colorPalette[colorIndex];
    originalColors.push(getComputedStyle(element).color);
    return `<span style="color: ${color};">${letter}</span>`;
}).join('');

element.innerHTML = coloredText;

