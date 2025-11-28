/*
CRIAR UMA CALCULADORA DE IMC, ONDE O USUÁRIO DEVE PREENCHER SEU
PESO, ALTURA E NOME.

DEVERÁ MOSTRAR NO CONSOLE.LOG APENAS O IMC DO USUÁRIO


/////////////////// Exemplo de manipulação do DOM ///////////////////

// const titulo = document.querySelector('h1')

// const body = document.querySelector('body')

// console.log(titulo)

// titulo.innerText = 'Curso de Desenvolvimento JavaScript'

// const novoParagrafo = document.createElement('h2')

// novoParagrafo.innerText = 'Novo paragrafo criado no JS'

// body.append(novoParagrafo)

// novoParagrafo.style.color = 'red'

*/

// Criação de objeto paciente para armazenar os dados do usuário
const inputPaciente = {
  nome: document.querySelector("#nome"),
  sobrenome: document.querySelector("#sobrenome"),
  peso: document.querySelector("#peso"),
  altura: document.querySelector("#altura"),
};

const dados = {
  nome,
  sobrenome,
  peso,
  altura,
  imc: "",
};

// Seleção dos elementos do DOM / HTML
const body = document.querySelector("body");
const botao = document.querySelector("button");
const form = document.querySelector("form");

// paciente.imc = paciente.peso / paciente.altura ** 2;

// Função que dispara um alerta ao submeter / enviar o formulário
function capturarDados() {
  form.addEventListener("submit", (evento) => {
    // Evita o comportamento padrão do formulário de recarregar a página
    evento.preventDefault();

    //recebe os valores (.value) ods imputs de entrada do formulario
    // esalva dentro  do objeto dados (const dados - ver linha 36)
    dados.nome = inputPaciente.nome.value;
    dados.peso = inputPaciente.peso.value;
    dados.sobrenome = Number(inputPaciente.sobrenome.value);
    dados.altura = +inputPaciente.altura.value;

    //dispara a funçao que ira calcular  o imc e envia dentro dela o objeto cosnt dados
    //que contem todos os valores dos imputs digitados
    calcularIMc(dados);
  });
}

// funçao  para caulcular o imc
// ele recebe os valores de calculos dentro do parenteses (entradaDados)

function calcularIMc(entradaDados) {
  //pega o valor da divisao do peso pelo quadrado da altura e salva em dados.imc
  dados.imc = entradaDados.peso / entradaDados.altura ** 2;

  //com base  no valor do dados .imc ,faz a verificaçao da faixa de peso
  if (dados.imc < 18.5) {
    inserirResultado("abaixo do peso" , dados.imc);
  } else if (dados.imc >= 18.5 && dados.imc < 24.9) {
    inserirResultado("peso normal" , dados.imc);
  } else if (dados.imc >= 24.9 && dados.imc < 29.9) {
    inserirResultado("sobrepeso" , dados.imc);
  } else if (dados.imc >= 29.9 && dados.imc < 34.9) {
    inserirResultado("obesidade 1" , dados.imc);
  } else if (dados.imc >= 34.9 && dados.imc < 39.9) {
    inserirResultado("obesidade 2" , dados.imc);
  } else {
    inserirResultado("obesidade 3" , dados.imc);
  }

}
function inserirResultado( faixa , resultado) {
  const paragrafo = document.querySelector("#paragrafo");

  paragrafo.innerText = "";

  paragrafo.innerText = `o ${dados.nome} tem um imc de: ${resultado.toFixed(2)} e esta  ${faixa}`;
}
// Chamada da função para adicionar / iniciar o monitoramento do evento de submit ao formulário
capturarDados();
