import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href=${image.original}>
      <img class="gallery__image" src=${image.preview} alt="${image.description}" />
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
