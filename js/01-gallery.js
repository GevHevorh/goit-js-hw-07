import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector(`.gallery`);
// const imagesMarkup = createImageGallery(galleryItems);

const createImageGallery = (images) =>
  images
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
 </div>`
    )
    .join("");

imageGallery.insertAdjacentHTML(`afterbegin`, createImageGallery(galleryItems));

imageGallery.addEventListener(`clock`, onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt = "${evt.target.description}"/>`
  );

  instance.show();

  window.addEventListener("keydown", closeByEsc);

  function closeByEsc(evt) {
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", closeByEsc);
      instance.close();
      return;
    }
  }
}
