const container = document.querySelector(".container");

let pixel = 16;

let heightPixel = 500 / pixel;
let widthPixel = 500 / pixel;

let createDiv = (size) => { 
  for (let i = 0; i < size * size; i++) {
    let colDiv = document.createElement("div");
    colDiv.setAttribute("class","col");
    colDiv.style.height = `${heightPixel}px`;
    colDiv.style.width = `${widthPixel}px`;
    container.appendChild(colDiv);

  }
}


createDiv(pixel);

let pixels = document.querySelector(".container > div");

pixels.addEventListener('mouseenter', (e) => {
    console.log(e.type);
    pixels.style.backgroundColor = "blue";
});




