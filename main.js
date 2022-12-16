var photoNumber;
item = document.querySelector(".items");
button = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", () => {
  getPic();
});

function preview() {
  const apiUrl = "https://picsum.photos/id/" + photoNumber + "/400/200";
  const gallery = document.createElement("figure");
  gallery.id = +photoNumber + 1;
  let id = gallery.id;
  gallery.innerHTML = `<img src=${apiUrl} loading="lazy" decoding="async">
      <figcaption>Picture ${photoNumber + 1} </figcaption>
      `;

  const close = document.createElement("i");
  close.className = "material-icons";
  close.addEventListener("click", () => {
    removePhoto(id);
  });
  close.innerHTML = "&#x2715";

  gallery.appendChild(close);
  item.appendChild(gallery);
}

function getPic() {
  for (photoNumber = 0; photoNumber < 10; photoNumber++) {
    preview();
  }
}

function addPhoto() {
  preview();
  photoNumber = photoNumber + 1;
}

function removePhoto(id) {
  document.getElementById(id).remove();
}
