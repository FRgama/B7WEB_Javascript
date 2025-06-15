// O que é uma função?

    function gravidade(){
    console.log("A gravidade é uma força que atrai os corpos para o centro da Terra.");
    console.log("A gravidade do planeta Terra é de 9,8 m/s².");
    }

// O que é uma função com parâmetro?

    function somar(n1, n2){
        let resultado = n1 + n2;
        console.log("A soma de " + n1 + " e " + n2 + " é igual a " + (resultado) + ".");
    }



// O que é uma função com retorno?
    function nomeCompleto(nome, sobrenome){
        return(`${nome} ${sobrenome}`)

    }
    let completo = nomeCompleto("João", "Silva");

// Função com retorno condicional

function maiorDeIdade(idade){
    if(idade >= 18){
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

// Exercício de funções

// Calcule a porcentagem entre 2 numeros exemplo: 25% de 40 é 10

function porcentagem(valor, percentual){
    let resultado = (valor/100) * percentual;
    return resultado;
}
// Testando a função porcentagem
let valor = 40;
let percentual = 10;
let resultadoPorcentagem = porcentagem(valor, percentual);
//console.log(`${percentual}% de ${valor} é igual a ${resultadoPorcentagem}.`);

/* Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

function calcularImovel(metragem, quartos){
    let m2 = 3000;
    if (quartos == 1) {
         return m2 * metragem
    }
    else if (quartos == 2){
        return metragem * (m2*1.2)
    }
    else {
        return metragem * (m2*1.5)
    }
}

//console.log(calcularImovel(25, 3))

/*
Crie uma função que valide usuario e senha
usuario correto : pedro
senha correta: 123
*/

function validar(usuario, senha){
    if (usuario == 'pedro' || senha == '123'){
        return true;
    }
    else{
        return false;
    }
}

let usuario = "joao"
let senha = 123
let validacao = validar(usuario, senha)

/*
if (validacao){
    console.log("Acesso Validado")
}
else{
    console.log("Acesso Negado")
}
*/

// Arrow Function

const soma = (x,y) => {
    return x+y
}

//Variável dentro de função

let count = 0; //Variável de escopo global

const add = () => {
    count++;
}

add()
add()
//console.log(count) //Pode usar variavel de fora dentro da função

// Função dentro de função

function addSquares(a,b){
    const square = (x) => {
        return x*x;
    }
    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB;
}
// console.log(addSquares(5,5))

//Introdução a Array

let colors = ['blue', 'red', 'green'];
let idades = [10, 10, 20]
let lista = ['Rodrigo', true, ['Correa', 'Gama'], 20] //Permite varios tipos de dados
//console.log(lista[2][1])

//Operações em Arrays

let ingredientes = [
    'leite',
    'farinha',
    'ovo',
    'sal',
    'açucar'
]
ingredientes.push('cebola') //Adiciona valor na ultima posição
ingredientes.pop() //Remove o ultimo valor
ingredientes.shift() //Remove o primeiro valor


//console.log(`Total de ingredientes: ${ingredientes.length}`)

/* Lista de exercicios de arrays

1- no array abaixo qual numero que obtem a Ferrari?

let carros = ["BMW", "Ferrari", "Mercedes"]

2- Troque a Ferrari por Audi

3- Adicione Volvo na lista

4- Exiba quantos itens tem no array

*/

let carros = ["BMW", "Ferrari", "Mercedes"]

//Ex1
//console.log(carros[1])

//Ex2
carros[1] = 'Audi'

//Ex3
carros.push("Volvo")

//Ex4
//console.log(carros.length)

//Objetos

let personagem = {
    nome: "Rodrigo",
    idade: 20,
    pais: "Brasil",
    caracteristicas: {
        forca: 20,
        inteligencia: 15,
        stamina: 15
    } 
}

//console.log(`${personagem.nome} tem ${personagem.idade} anos`)
//console.log(`O personagem tem ${personagem.caracteristicas.forca} de força`)

personagem.nome = 'Pedro';
personagem.caracteristicas.forca -= 5;
//console.log(`O personagem tem ${personagem.caracteristicas.forca} de força`)

//acessando objeto dentro de array dentro de objeto
let personagem2 = {
    nome: "Rodrigo",
    idade: 20,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}
//console.log(personagem2.carros[0].cor)

//Funções dentro de um objeto

let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Gama",
    idade: 20,
    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome
    }
}

//console.log(pessoa.nomeCompleto())

//Loop For

for(let n = 0; n <= 10; n++) {
    //console.log(`Frase numero ${n}`)
}

//Loop em Array
let listaCores = [
    {nome: "preto", qtd: 10},
    {nome: "branco", qtd: 15},
    {nome: "azul", qtd: 5},
    {nome: "vermelho", qtd: 20}]
listaCores.push("verde")

for(n = 0; n < listaCores.length; n++){
    //console.log(listaCores[n])
}

//Melhor metodo para arrays
for(let i in listaCores){
    //console.log(listaCores[i])
}

//melhor para objetos
for(let cor of listaCores){
    //console.log(`Cor - ${cor.nome} qntd - ${cor.qtd}`)
}

//Loop While

let numero = 0;

while(numero <= 10){
    //console.log(`O numero da vez é ${numero}`)
    numero++;
}

//Exercício de loops

/*
1- Faça um loop que mostre todas as frutas

let fruits = ["Maça", "Uva", "Banana"];

2- Conte de 1 até 100 através de um While
*/

//Ex1
let fruits = ["Maça", "Uva", "Banana"];

for(let i in fruits){
    //console.log(fruits[i])
}

//Ex2
let num = 1

while(num <= 100){
    //console.log(num)
    num++;
}

//Funções de array

fruits = ["Maça", "Uva", "Laranja", "Banana"];


//console.log(fruits.join(' aaa ')) 
//O Join serve como um separador dos itens na array, mas nao altera a array diretamente

//Ordenação de Array

fruits.sort();
//console.log(fruits)

let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "BWW", year: 2018},
    {brand: "Ferrari", year: 2020}
]

cars.sort(
    (a, b) =>{
        return a.year - b.year;
        //retorna valor positivo, negativo ou 0, o suficiente para o método funcionar
    }
)

//console.log(cars)

//Iteração de array

fruits = ["Maça", "Uva", "Laranja", "Banana"];

let bigFruits = fruits.filter((item) =>{
    return item.length > 4;
    //Cria um filtro com os itens que atendem as condições
})

// console.log(bigFruits)

let ok = fruits.every((value) => {
    return value.length > 3; 
    //True se todos os itens atendem as condições
})

if(ok){
    //console.log("Todos sao maior que 3")
}else{
    //console.log("Nem todos são maior que 3")
}

let teste = fruits.some((value) => {
    return value.length > 3;
    //True se algum dos itens atendem as condições
})

if(teste){
    //console.log("Todos sao maior que 3")
}else{
    //console.log("Nem todos são maior que 3")
}

if(fruits.includes("Uva")){ ////True se o item indicado estiver na array
    //console.log("Tem uva!")
}else{
    //console.log("Não tem uva")
}