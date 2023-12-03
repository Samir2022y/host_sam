const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function mine(event) {
  event.preventDefault(); // Prevent form submission
  
  let nameq = document.getElementById("samir").value;
  let phoneNumber = document.getElementById("samir1").value;
  let email = document.getElementById('samir2').value;
  let mess = document.getElementById('samir3').value;
  let small = document.getElementById('validationMessage'); // Get the element to display validation messages
  
  small.innerHTML = ""; // Clear previous messages
  
  if (nameq.trim() === "") {
    small.innerHTML = "Please enter your name.";
    return;
  }

  if (phoneNumber.trim() === "") {
    small.innerHTML = "Please enter your phone number.";
    return;
  }

  if (email.trim() === "") {
    small.innerHTML = "Please enter your email.";
    return;const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function mine(event) {
  event.preventDefault(); // Prevent form submission
  
  let nameq = document.getElementById("samir").value;
  let phoneNumber = document.getElementById("samir1").value;
  let email = document.getElementById('samir2').value;
  let mess = document.getElementById('samir3').value;
  let small = document.getElementById('validationMessage'); // Get the element to display validation messages
  
  small.innerHTML = ""; // Clear previous messages
  
  if (nameq.trim() === "") {
    small.innerHTML = "Please enter your name.";
    return;
  }

  if (phoneNumber.trim() === "") {
    small.innerHTML = "Please enter your phone number.";
    return;
  }

  if (email.trim() === "") {
    small.innerHTML = "Please enter your email.";
    return;
  }

  if (mess.trim() === "") {
    small.innerHTML = "Please enter a message.";
    return;
  }

  // If all validations pass, display success message
  small.innerHTML = "Form submitted successfully!";
}



let Btn = document.querySelector("#check");

 Btn.addEventListener("click",  mine);
 let slideIndex = 0; // Initialize slide index

// Call the showSlides function initially and start the automatic slideshow
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex and display the corresponding slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset slideIndex to 1 if it exceeds the number of slides
  }
  slides[slideIndex - 1].style.display = "block";

  // Set the slideshow to change slides every 3 seconds (adjust as needed)
  setTimeout(showSlides, 2300); // Change slide every 3 seconds (3000 milliseconds)
}


  
  }

  if (mess.trim() === "") {
    small.innerHTML = "Please enter a message.";
    return;
  }

  // If all validations pass, display success message
  small.innerHTML = "Form submitted successfully!";
}



let Btn = document.querySelector("#check");

 Btn.addEventListener("click",  mine);
 let slideIndex = 0; // Initialize slide index

// Call the showSlides function initially and start the automatic slideshow
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex and display the corresponding slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset slideIndex to 1 if it exceeds the number of slides
  }
  slides[slideIndex - 1].style.display = "block";

  // Set the slideshow to change slides every 3 seconds (adjust as needed)
  setTimeout(showSlides, 2300); // Change slide every 3 seconds (3000 milliseconds)
}
const changingTextElement = document.getElementById("changingText");

function changeText() {
  changingTextElement.textContent = "WELCOME TO ENOSI";
  changingTextElement.classList.add("orange-text");
}

// Change text after 3 seconds (adjust as needed)
setTimeout(changeText, 3000);
