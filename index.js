// const hamburger_menu = document.querySelector(".hamburger-menu")
// const container = document.querySelector(".container")
// const projects = document.getElementById('projects')
// const contact = document.getElementById('contact')
// const skills = document.getElementById('skills')
// const logo = document.querySelector('.logo')
// hamburger_menu.addEventListener("click", () =>{
//     container.classList.toggle("active")
//     logo.classList.toggle('active')
//     document.querySelector('body').classList.toggle('open')
//     document.querySelector('.scrolltext').classList.toggle('activescroll')
// })

// projects.addEventListener("click", () =>{
//     // window.location.href = "/index.html#projectscroll"
//     logo.classList.toggle('active')

//     container.classList.toggle("active")
//     document.querySelector('body').classList.toggle('open')
//     document.querySelector('.scrolltext').classList.toggle('activescroll')



// })
// contact.addEventListener("click", () =>{
//     // window.location.href = "/index.html#cont"
//     logo.classList.toggle('active')

//     container.classList.toggle("active")
//     document.querySelector('body').classList.toggle('open')
//     document.querySelector('.scrolltext').classList.toggle('activescroll')



// })
// skills.addEventListener("click", () =>{
//     // window.location.href = "/index.html#mh-skills"
//     logo.classList.toggle('active')

//     container.classList.toggle("active")
//     document.querySelector('body').classList.toggle('open')
//     document.querySelector('.scrolltext').classList.toggle('activescroll')



// })
console.log("\r\n __        ___           _   _       _   _         ____           ___ \r\n \\ \\      \/ \/ |__   __ _| |_( )___  | | | |_ __   | __ ) _ __ ___|__ \\\r\n  \\ \\ \/\\ \/ \/| \'_ \\ \/ _` | __|\/\/ __| | | | | \'_ \\  |  _ \\| \'__\/ _ \\ \/ \/\r\n   \\ V  V \/ | | | | (_| | |_  \\__ \\ | |_| | |_) | | |_) | | | (_) |_| \r\n    \\_\/\\_\/  |_| |_|\\__,_|\\__| |___\/  \\___\/| .__\/  |____\/|_|  \\___\/(_) \r\n                                          |_|                         \r\n")

const selectElement = (selector) => document.querySelector(selector);
const toggleClasses = () => {
    container.classList.toggle("active");
    logo.classList.toggle('active');
    document.querySelector('body').classList.toggle('open');
    document.querySelector('.scrolltext').classList.toggle('activescroll');
};

const hamburger_menu = selectElement(".hamburger-menu");
const container = selectElement(".container");
const projects = selectElement('#projects');
const contact = selectElement('#contact');
const skills = selectElement('#skills');
const logo = selectElement('.logo');

hamburger_menu.addEventListener("click", toggleClasses);
projects.addEventListener("click", toggleClasses);
contact.addEventListener("click", toggleClasses);
skills.addEventListener("click", toggleClasses);






function redirect(){
 window.open("https://github.com/farhanahmad15")
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
    var link = `mailto:nahrafswebsite@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(messageVal)}`
    window.open(link)

    // Log the input value to the console
    // console.log(link);
});


  








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



document.getElementById('amogus').onclick = function(){
  if (document.querySelector('.amoguss').style.display === 'none') {
    document.querySelector('.amoguss').style.display = 'block'
  } else {
    document.querySelector('.amoguss').style.display = 'none'
  }
}