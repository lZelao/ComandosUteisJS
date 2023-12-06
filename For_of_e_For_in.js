const UsarForOf = (vetor) => {

    for (let percorrer of vetor) {
        console.log(percorrer)
    }

}

function UsarForIn(vetor) {
    for (let ContarIndice in vetor) {
        console.log(ContarIndice)

    }
    console.log("A quantidade de Itens é:" +vetor.length)
}

let listaCompra = ["carne", "arroz", "feijão"]
UsarForOf(listaCompra)
UsarForIn(listaCompra)