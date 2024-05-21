"use stricth";
const images = [
	{
		image: "img/01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
	},
	{
		image: "img/02.webp",
		title: "Ratchet & Clank: Rift Apart",
		text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
	},
	{
		image: "img/03.webp",
		title: "Fortnite",
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	},
	{
		image: "img/04.webp",
		title: "Stray",
		text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

let currentImage = 0;
//salvo gli item dal dom
const items = document.querySelector(".items");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
createImage(); //cre la mia lista di immagini
const allImage = document.querySelectorAll(".item"); // salvo le mie immagini in un array

next.addEventListener("click", function () {
	if (currentImage < allImage.length - 1) {
		allImage[currentImage].classList.remove("active");
		currentImage++;
		allImage[currentImage].classList.add("active");
	} else {
		allImage[currentImage].classList.remove("active");
		currentImage = 0;
		allImage[currentImage].classList.add("active");
	}
});

prev.addEventListener("click", function () {
	if (currentImage > 0) {
		allImage[currentImage].classList.remove("active");
		currentImage--;
		allImage[currentImage].classList.add("active");
	} else {
		allImage[currentImage].classList.remove("active");
		currentImage = allImage.length - 1;
		allImage[currentImage].classList.add("active");
	}
});

//FUNZIONI
function createImage() {
	images.forEach((image, index) => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		const content = document.createElement("div");
		const title = document.createElement("div");
		const p = document.createElement("p");
		div.classList.add("item");
		if (index === currentImage) {
			div.classList.add("active");
		}
		img.src = image.image;
		img.alt = image.title;
		content.classList.add("content");
		title.innerText = image.title;
		title.classList.add("title-image");
		p.innerText = image.text;
		p.classList.add("text-image");

		div.append(content);
		content.append(title);
		content.append(p);
		div.append(img);
		items.append(div);
	});
}
