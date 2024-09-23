const container = document.querySelector(".container");

// function for the pixels (divs)

let heightPixel; // global declare of submit button
let widthPixel; // global declare of submit button
let createDiv = (size) => { 
  for (let i = 0; i < size * size; i++) {
    let colDiv = document.createElement("div");
    colDiv.setAttribute("class","col");
    colDiv.style.height = `${heightPixel}px`;
    colDiv.style.width = `${widthPixel}px`;
    container.appendChild(colDiv);
  }
}

const submit = document.querySelector("#submit");
let input = document.querySelector("#myPixel");

// evaluate the input from 2 to 100
submit.addEventListener("click", () => {
  if (input.value > 100) {
    alert("You type more than 100");
    location.reload(); 
  } else if (input.value < 2) {
    alert("You type more less than 2");
  } else {
  let pixelValue = input.value;
  pixel = pixelValue;
  heightPixel = 500 / pixel;
  widthPixel = 500 / pixel;
  createDiv(pixel);
  pixels = document.querySelectorAll(".col"); // need to declare the pixels here
  changeColor(); 
  submit.disabled = true;
  }
})

let pixels;
let pixel;
function changeColor() {
// for color each div
pixels.forEach(pix => {
    pix.addEventListener('mouseenter', (e) => {
    console.log(e.type);   
    // RGB colors
    let redColor = Math.floor(Math.random() * 255);
    let greenColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);
    pix.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor}, 0.8)`;
    });
});
}

// reset the sketch
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
})









