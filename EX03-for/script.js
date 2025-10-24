    //CONTADOR DE 0 A 10
for (let num = 1; num <= 10 ; num++) {
    //console.log(num);  
}

    // CONTADOR DE NÚMEROS PARES 
for (let i = 0; i <= 20; i++){
    if (i%2===0) {
        //console.log(i);
        
    }
}

    //SOMADOR DE NÚMEROS DE 0 A 50
 let soma = 0
for (let i = 0; i <= 50; i++){
    soma = soma + i 
}
//console.log(soma);

    //TABUADA SIMPLES
let numero = 2
for (let i = 1; i <= 10; i++){
    let res = numero * i
    //console.log(`${numero} x ${i} = ${res}`);
    
}

//CONTADOR DE VOGAIS
let palavra = 'jessica'
let contador = 0
for(let i = 0; i < palavra.length; i++){
    let letra = palavra [i]
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++
        
    }
}
    //console.log(`A palavra ${palavra} tem ${contador} vogais!`);
    