

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const baseURL = 'https://github.com/et13312/et13312.github.io/tree/59c9185de2cd433363a747c9f6674fee5d778fb7/assignment%204/part%202/images/';

const images = [
{filename: "pic1.jpg",alt: "Closeup of a human eye." },
{filename: "pic2.jpg",alt: "Rock that looks like a wave." },
{filename: "pic3.jpg",alt: "Purple and white pansies." },
{filename: "pic4.jpg",alt: "Section of wall from pharaoh's tomb." },
{filename: "pic5.jpg",alt: "Large moth on a leaf." },
]


for (const image of images)
{
const newImage = document.createElement('img')
newImage.setAttribute('src', baseURL + image.filename);
newImage.setAttribute ('alt', image.alt);
thumbBar.appendChild(newImage);
newImage.addEventListener('click',e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
}
);
}

btn.addEventListener ('click',() => {
if (btn.classList.contains = 'dark'){ 
btn.textcontent = 'Lighten';
overlay.style.backgroundColour = 'rgb(0 0 0 / 0.5)';
} else {
btn.textContent = 'Darken';
overlay.style.backgroundColour = 'rgb(0 0 0 / 0)';
}
}
);