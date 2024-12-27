const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function sendMail(){
  var subject = document.getElementById("subject").value;
  var mailBody = document.getElementById("mailBody").value;
  window.location.href = "mailto:deviprasadofficial@gmail.com?subject=" + subject + "&body=" + mailBody;
}

let currentYearElement = document.getElementById('currentYear');
let currentYear = new Date().getFullYear();

currentYearElement.innerHTML = currentYear;