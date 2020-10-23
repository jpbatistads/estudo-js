/*Criando onjeto*/
let pessoa = {
    nome:"joão",
    idade:30,
    hobbies:["Ouvir Musica", "Viajar", "Comer bem"]
}

/*Acessando propriedades do objeto*/
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.hobbies);

/*Alterando*/

pessoa.nome = "Vanessa"
pessoa.idade = 27
pessoa.hobbies [0] = "Comer Besteira"

/*Deletando*/

delete pessoa.nome

/*Printando na tela*/

console.log(pessoa);

/*Podemos criar um objeto dentro de outro*/