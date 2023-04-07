const hamburger_menu = document.querySelector(".hamburger-menu")
const container = document.querySelector(".container")
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const skills = document.getElementById('skills')
hamburger_menu.addEventListener("click", () =>{
    container.classList.toggle("active")
    document.querySelector('body').classList.toggle('open')
    document.querySelector('.scrolltext').classList.toggle('activescroll')
})

projects.addEventListener("click", () =>{
    window.location.href = "/index.html#projectscroll"
    container.classList.toggle("active")
    document.querySelector('body').classList.toggle('open')
    document.querySelector('.scrolltext').classList.toggle('activescroll')



})
contact.addEventListener("click", () =>{
    window.location.href = "/index.html#cont"
    container.classList.toggle("active")
    document.querySelector('body').classList.toggle('open')
    document.querySelector('.scrolltext').classList.toggle('activescroll')



})
skills.addEventListener("click", () =>{
    window.location.href = "/index.html#mh-skills"
    container.classList.toggle("active")
    document.querySelector('body').classList.toggle('open')
    document.querySelector('.scrolltext').classList.toggle('activescroll')



})







function redirect(){
 window.open("https://github.com/FOMEISTAKEN")
}
// function sendMail() {
//     var link = "mailto:me@example.com"
//              + "?cc=myCCaddress@example.com"
//              + "&subject=" + encodeURIComponent("This is my subject")
//              + "&body=" + encodeURIComponent(document.getElementById('myText').value)
//     ;
    
//     window.location.href = link;
// }



// Select the button
var button = document.querySelector(".scrolltext");

// Add an event listener to the button
button.addEventListener("click", function() {
    // Select the element to scroll to
    var element = document.querySelector("#projects");

    // Calculate the distance from the top of the page
    var distance = element.getBoundingClientRect().top;

    // Set the scroll speed (in milliseconds)
    var scrollSpeed = 200000;

    // Scroll to the element over the set time
    window.scrollBy({
        top: distance,
        behavior: "smooth",
        duration: scrollSpeed
    });
});

var mail = document.querySelector('.emaillink')

mail.addEventListener("click", async function(){
    window.location.href = '/index.html#cont'
})


var subject = document.getElementById("subject");
var message = document.getElementById("message");
var submitButton = document.getElementById("submitButton");

// Add an event listener to the button
submitButton.addEventListener("click", function() {
    // Get the value of the input box
    var subjectVal = subject.value;
    var messageVal = message.value;
    var link = `mailto:farhanisawake@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(messageVal)}`
    window.open(link)

    // Log the input value to the console
    // console.log(link);
});

// window.addEventListener('scroll', () => {
//     const logo = document.querySelector('.logo');
//     if (window.scrollY > 20) {
//       logo.classList.add('sticky');
//     } else {
//       logo.classList.remove('sticky');
//     }
//   });
  








const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("h1").onmouseover = event => {  
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





window.onload = function(){
  const loader = document.querySelector("#loader");
    loader.style.display = "none"; // hide loader once page is loaded 
}
