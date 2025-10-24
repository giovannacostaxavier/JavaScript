let num = 10
if (num < 0) {
    //console.log('Número negativo!');
    
} else {
   // console.log('Número positivo!');
    
}

let numero = 15
if (numero >= 10 && numero <= 50) {
   // console.log('Número aceito!');
    
} else {
   // console.log('Número inválido!');
    
}

let idade = 'abc'
if (isNaN(idade) || idade >= 200 || idade < 0) {
   // console.log('Inválido');
    
} else if (idade >= 0 && idade <= 12) {
   // console.log('Criança');
    
} else if (idade >= 13 && idade <= 17) {
   // console.log('Adolescente');
    
} else if (idade >=18 && idade <= 59) {
   // console.log('Adulto');
    
} else {
   // console.log('Idoso');
    
}