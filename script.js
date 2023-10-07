function toggleMode() {
    const html = document.documentElement

//    if( html.classList.contains('light')) {
//        html.classList.remove('light')
//    } else {
//       html.classList.add('light')
//    }
    html.classList.toggle('light')


// Pegar A tag img:
// QuerySelector: Função de pesquisa pelo seletor.
    const img = document.querySelector("#profile img")

// Se tiver light mode, adicionar a imagem light.
    if (html.classList.contains("light")) {

// Sebstituir a imagem:
// setAttribute: Selecionar o atributo que quer alterar.
        img.setAttribute('src', "avatar-light.png")
    } else {

// se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "avatar-dark.png")
    }
}