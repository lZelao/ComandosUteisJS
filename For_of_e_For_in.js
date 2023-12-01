function UsarForOf(vetor) {

    for (let percorrer of vetor) {
        console.log(percorrer)
    }

}

function UsarForIn(vetor) {
    for (let ContarIndice in vetor) {
        console.log(ContarIndice)

    }
}

let listaCompra = ["carne", "arroz", "feijão"]
UsarForOf(listaCompra)
UsarForIn(listaCompra)