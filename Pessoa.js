class Pessoa{
    constructor(nome,idade,salario){
        this.nome = nome
        this.idade = idade
        this.salario = salario
    }

    aumento(){
        if(this.idade>=50){
            this.salario = this.salario *1.1
        }
    }
}

funcionario1 = new Pessoa("Maria",18,2000)
console.log(funcionario1)
funcionario1.aumento()
console.log(funcionario1)

funcionario2 = new Pessoa("José", 51, 3000)
console.log(funcionario2)
funcionario2.aumento()
console.log(funcionario2)
