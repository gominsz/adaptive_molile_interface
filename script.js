function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //troca de cor das classes

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //sustituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    //se tiver sem light mode, mandar imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
