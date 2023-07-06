// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let numerosPerfeitos = []
let numero = 1;

while(numerosPerfeitos.length < 4){
    let somaDosDivisores = 0

    for (let i = 1; i < numero / 2; i++) {
        if(numero % i === 0){
            somaDosDivisores +=i
        }   
    }

    if(somaDosDivisores === numer){
        numerosPerfeitos.push(numero);
    }

    numero++
}

console.log(numerosPerfeitos);
