//DUPLICANDO VALORES COM MAP
numeros = [10,20,30,40,50]
NovosNumeros = numeros.map((el)=>{
    return el*2
})
//console.log(NovosNumeros);

//ADICIONANDO INFORMAÇÕES COM MAP
produtos=[
    {id:1,nome:"Geladeira",preco:1.999},
    {id:2,nome:"Iphone 16",preco:2.999},
    {id:3,nome:"TV 42 polegadas",preco:3.999},
    {id:4,nome:"Playstation 5",preco:1.999}
]
NovosProdutos = produtos.map((el)=>{
    const promo = true 
    return {
        id:el.id,
        nome:el.nome,
        preco:el.preco,
        promocao:promo
    }
})
//console.log(NovosProdutos);

//EXTRAIR DADOS COM MAP
nomes = [
    {nome:"Gabriela",idade:22,email:"gabriela122@gmail.com"},
    {nome:"Ana",idade:25,email:"anapaula122@gmail.com"},
    {nome:"Vinicius",idade:34,email:"vinicius734@gmail.com"},
    {nome:"João",idade:20,email:"joaopaulo@gmail.com"}
]
emails = nomes.map((el)=>{
    return{
        email:el.email
    }
})

//console.log(emails);

//DAR DESCONTO EM PRODUTOS USANDO MAP
eletros = [
    {id:1,nome:"Geladeira",preco:1.999,},
    {id:1,nome:"Televisão",preco:2.999,},
    {id:1,nome:"Playstation",preco:3.999,},
    {id:1,nome:"Iphone",preco:1.999,}
]
desconto = eletros.map((el)=>{
    const desc = (el.preco*0.9).toFixed(3)
    return{
        id:el.id,
        nome:el.nome,
        preco:el.preco,
        desconto:desc
    }
})
//console.log(desconto);

