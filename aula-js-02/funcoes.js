function SomaSimples () {
    return 3 + 4
}

console.log(SomaSimples())



function SomaComParamentros(n1, n2) {
    return n1 + n2
}

console.log(SomaComParamentros(3, 4))



//Função Anônima
//Arrow Function
const Pontencia = (n, e) => {
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}

Pontencia(2, 3)


// Função que calcule a média do aluno e exiba o resultado
// media >= 6,00 = Aprovado
// media >= 4,00 || < 6,00 = Recuperações
// media < 4,00 = Reprovado 

function Media (Nota1, Nota2, Nota3, Nota4, ) {
    resultado = (Nota1 + Nota2 + Nota3 + Nota4) /4
    if(resultado >= 6) {
        console.log('Aprovado')
    }
    else if(resultado >= 4||resultado < 6) {
        console.log('Recuperação')
    }
    else {
        console.log('Reprovado')
    }
}
Media(6, 6, 7, 8)

const ResultadoMedia = (n1, n2) => {
    let media = (n1 + n2) /2

    if (media < 4.00) {
        return 'Reprovado'
    } else if (media < 6.00){
        return 'Recuperação'
    } else {
        return 'Aprovado'
    }
}
