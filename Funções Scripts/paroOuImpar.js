//Fazer uma função que retorna par ou impar.

//Criação da função
function parImpa(x) {
    if (x % 2 == 0) {
      return "É par";
    } else 
    return "É impar";
  }
  
  // Chamada
  let res = parImpa(10);
  
  //Resultado no console.
  console.log(res);

  // Chamada literal passando parâmetro
  
  console.log(parImpa()); // O valor do parâmetro vai ser atribuído a X
  
  // Utilização do módulo % que retorna o resto da divisão de um numero