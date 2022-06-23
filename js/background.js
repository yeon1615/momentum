const images = ['bg 1.jpg', 'bg 2.jpg', 'bg 3.jpg', 'bg 4.jpg', 'bg 5.jpg'];

const chosenImage = images[Math.trunc(Math.random() * images.length)];

const bgImage = document.createElement('img');
// 아직까진 document 내부 어디에도 존재하지 않음. 자바스크립트에서만 존재하는 것

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
console.log(document.body.appendChild(bgImage));
