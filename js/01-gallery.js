import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}><img class="gallery__image" src=${image.preview} data-source=${image.original} alt="${image.description}"></img></a>
  </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryList);

document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `
   <img src="${event.target.dataset.source}" alt="${event.target.dataset.alt}">
 `
  );
  modal.show();
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  });
};
