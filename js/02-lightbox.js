import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createImageListItem = galleryItems.map(
  (image) =>
    `<li class="gallery__item"> 
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}">
    </a>
    </li>`
);
gallery.insertAdjacentHTML("afterbegin", createImageListItem.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
