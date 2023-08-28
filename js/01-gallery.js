import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClick);

const createImageListItem = galleryItems.map(
  (image) =>
    `<li class="gallery__item"> <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></li>`
);

gallery.insertAdjacentHTML("afterbegin", createImageListItem.join(""));

const getAllLinksImage = document.querySelectorAll(".gallery__link");
getAllLinksImage.forEach((link) =>
  link.addEventListener("click", imageLinkToDefault)
);

function imageLinkToDefault(event) {
  event.preventDefault();
}

function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    instance.show();
  }
}
