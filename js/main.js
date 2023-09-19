let boxFocoRojo = document.getElementById('boxFocoRojo')
let boxFocoNaranja = document.getElementById('boxFocoNaranja')
let boxFocoVerde = document.getElementById('boxFocoVerde')
let textoSecundero = document.getElementById('textoSecundero')
let inputOnOff = document.getElementById('inputOnOff')
let textoOn = document.getElementById('on')
let textOff = document.getElementById('off')
let vueltas = 1
let luzActiva
let globalId

const focoRojo = {
    encendido:{
        color: 'red'
    },
    apagado:{
        color: 'black'
    }
}

const focoNaranja = {
    encendido:{
        color: 'orange'
    },
    apagado:{
        color: 'black'
    }
}

const focoVerde = {
    encendido:{
        color: 'limegreen'
    },
    apagado:{
        color: 'black'
    }
}

function encenderFocoRojo() {
    luzActiva = boxFocoRojo
    let contador = 10
    if (vueltas === 1) {
        boxFocoRojo.style.backgroundColor = focoRojo.encendido.color
        boxFocoRojo.style.boxShadow = '0px 2px 71px 32px rgba(227,30,30,0.48)'
        textoSecundero.style.color = focoRojo.encendido.color
        textoSecundero.innerText = 11
        vueltas++
    }
    const id = setInterval(() => {
        boxFocoRojo.style.backgroundColor = focoRojo.encendido.color
        boxFocoRojo.style.boxShadow = '0px 2px 71px 32px rgba(227,30,30,0.48)'
        if (contador === 1) {
            encenderFocoVerde()
        }
        if (contador === 0) {
            boxFocoRojo.style.backgroundColor = focoRojo.apagado.color
            boxFocoRojo.style.boxShadow = ''
            clearInterval(id)
            return
        }
        textoSecundero.style.color = focoRojo.encendido.color
        textoSecundero.innerText = contador
        contador--
    }, 1000)
    globalId = id
}

function encenderFocoVerde() {
    luzActiva = boxFocoVerde
    let contador = 10
    const id = setInterval(() => {
        boxFocoVerde.style.backgroundColor = focoVerde.encendido.color
        boxFocoVerde.style.boxShadow = '0px 2px 71px 32px rgba(53,204,49,0.48)'
        if (contador === 1) {
            encenderFocoNaranja()
        }
        if (contador === 0) {
            boxFocoVerde.style.backgroundColor = focoVerde.apagado.color
            boxFocoVerde.style.boxShadow = ''
            clearInterval(id)
            return
        }
        textoSecundero.style.color = focoVerde.encendido.color
        textoSecundero.innerText = contador
        contador--
    }, 1000)
    globalId = id
}

function encenderFocoNaranja() {
    luzActiva = boxFocoNaranja
    let contador = 5
    const id = setInterval(() => {
        boxFocoNaranja.style.backgroundColor = focoNaranja.encendido.color
        boxFocoNaranja.style.boxShadow = '0px 2px 71px 32px rgba(255,141,0,0.48)'
        if (contador === 1) {
            encenderFocoRojo()
        }
        if (contador === 0) {
            boxFocoNaranja.style.backgroundColor = focoNaranja.apagado.color
            boxFocoNaranja.style.boxShadow = ''
            clearInterval(id)
            return
        }
        textoSecundero.style.color = focoNaranja.encendido.color
        textoSecundero.innerText = contador
        contador--
    }, 1000)
    globalId = id
}

const click = inputOnOff.addEventListener('click', () => {
    if (inputOnOff.checked) {
        textoOn.style.opacity = 0
        textOff.style.opacity = 1
        encenderFocoRojo()
    } else {
        clearInterval(globalId)
        textoOn.style.opacity = 1
        textOff.style.opacity = 0
        globalId = 0
        vueltas = 1
        textoSecundero.style.color = focoRojo.apagado.color
        luzActiva.style.backgroundColor = 'black'
        luzActiva.style.boxShadow = ''
    }
})