
const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY / -40;

  console.log(scroll)

  imagenes.forEach((imagen) => {
    // if (scroll < -50) {
    //   scroll += 80;
    // }
    imagen.style.backgroundPositionY = `${scroll}px`;
  });
});
