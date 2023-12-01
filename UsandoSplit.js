function TransformarVariavelEmArray(nome) {
    nome = nome.split(".", nome.length)
    console.log(nome)
    for (let tamanhoDaFrase in nome) {
        console.log(tamanhoDaFrase)
    }
    console.log("Esses são os paragrafos:")
    for (let QuaisParagrafos of nome) {
        console.log("->" + QuaisParagrafos)
    }
}
TransformarVariavelEmArray("Eliseu mestre em programação orientada a eventos. e tambem orientada a objetos")