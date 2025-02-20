'use strict'

async function pesquisarFotos(categoria){
    const url = ` https://www.freetogame.com/api/${categoria}/imagens`

    const response = await fetch(url)
    const data = await response.json()

    return data.message 

}

function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link 
    galeria.appendChild(novaImg)
} 


    

