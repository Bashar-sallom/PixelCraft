
// The End Of The Year Date

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


// mega-menu
let megaMenu = document.querySelector(".mega-menu");
let clickMegaMenu = document.querySelector(".other-links");
clickMegaMenu.addEventListener("click",()=>{
  megaMenu.classList.toggle("over")

})


// Mood light or dark
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleButton = document.querySelector(".mood-icon");

  // Checking the preferences stored in localStorage.
  let savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
      // Applying the saved theme when the page loads.
      savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem("theme", savedTheme);
  }

  // Applying the saved theme when the page loads.
  body.classList.add(savedTheme);
  let iconMoodDark = document.querySelector(".dark-mood")
  let iconMoodLight = document.querySelector(".light-mood")
  // When the button is clicked, toggle the theme and update localStorage.
  toggleButton.addEventListener("click", () => {
      let newTheme = body.classList.contains("dark") ? "light" : "dark";
      body.classList.remove("dark", "light");
      body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      let iconMood =Array.from(document.querySelectorAll(".mood-icon div"))
      iconMood.forEach((el)=>{
        el.classList.remove("disa")
      })
      if(newTheme === "dark"){
        iconMoodLight.classList.add("disa")
        }else if(newTheme === "light"){
          iconMoodDark.classList.add("disa")
        }
  });
    if(savedTheme === "dark"){
    iconMoodLight.classList.add("disa")
    }else if(savedTheme === "light"){
      iconMoodDark.classList.add("disa")
    }
     

});