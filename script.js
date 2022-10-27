"use strict";

const images = [
  { id: "0", url: "./img/0.jpg" },
  { id: "1", url: "./img/1.jpg" },
  { id: "2", url: "./img/2.jpg" },
  { id: "3", url: "./img/3.jpg" },
  { id: "4", url: "./img/4.jpg" },
  { id: "5", url: "./img/5.jpg" },
];

const containerItems = document.querySelector("#container-items");
const balls = document.querySelector(".balls");

let slideAtual = "1";
let rolar = true;

const loadImages = (images, containerItems) => {
  images.forEach((image) => {
    balls.innerHTML += `
        <div id="${image.id}" class="ball"></div>
        `;
    containerItems.innerHTML += `
        <div class='item'>
        <img src='${image.url}' 
        <div/>
        `;
  });
};

loadImages(images, containerItems);

const ball = document.querySelectorAll(".ball");
ball[slideAtual].classList.add("active");

let items = document.querySelectorAll(".item");

const next = () => {
  if (slideAtual < ball.length - 1) {
    rolar = false;
    ball[slideAtual].classList.remove("active");
    slideAtual++;
    ball[slideAtual].classList.add("active");
  } else {
    ball[slideAtual].classList.remove("active");
    slideAtual = "0";
    ball[slideAtual].classList.add("active");
  }

  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const previous = () => {
  rolar = false;
  if (slideAtual == "0") {
    ball[slideAtual].classList.remove("active");
    slideAtual = ball.length - 1;
    ball[slideAtual].classList.add("active");
  } else {
    ball[slideAtual].classList.remove("active");
    slideAtual--;
    ball[slideAtual].classList.add("active");
  }

  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);

setInterval(() => {
  if (rolar) {
    next();
  } else {
    rolar = true;
  }
}, 3000);
