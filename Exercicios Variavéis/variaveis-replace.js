/*Declaração de variavel contendo uma string e um number*/
/*Estas variáveis vão ser usadas no méthodo replace*/

const nome = 'Seu Zé';
const idade = 24;


/*Utilizando variável dentro da string para ser substituida*/
const mensagemNome = 'Nome de usuário {nome}';/*Utilização {nome}*/
const mensagemIdade = 'Idade {idade}';/*Utilização {idade}*/

/*Utilizando o methodo de substituição*/
const mensagemNomeFormatada = mensagemNome.replace('{nome}', nome);
const mensagemIdadeFormatada = mensagemIdade.replace('{idade}', idade);

const mensagemFinal = mensagemNomeFormatada + ' ' + mensagemIdadeFormatada;

console.log(mensagemFinal);

