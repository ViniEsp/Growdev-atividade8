// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [`Édson, Marcelo, Letícia, Ju, Thobias`]

//console.log(nome.reverse());

for(let i = nomes.length - 1; i >=  0; i--){
    console.log(nomes[i]);
}
let i = nomes.length - 1;
console.log(i);