const StrngMenor = (vetor)=>{
    if(!vetor || typeof vetor !== "string") return null
    const Frase = vetor.trim().split(" ")
    let menorPalavra = Frase[0]

    for(let i = 1; i < Frase.length;i++){
        if(Frase[i].length < menorPalavra.length){
            menorPalavra = Frase[i]
        }
        
    }
    return menorPalavra


}

console.log(StrngMenor("existe onde grafites gritão"))