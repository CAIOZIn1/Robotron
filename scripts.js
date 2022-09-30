function manipularDados(operador, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (operador === '-') {
        if (parseInt(peca.value) == 0) {
            console.log('Impossível diminuir mais.')
        }
        else{
            peca.value = parseInt(peca.value) - 1
        }
        
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

const controle = document.querySelectorAll('[data-controle]')

controle.forEach( (elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        manipularDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})