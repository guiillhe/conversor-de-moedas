function Converter() {
  var cotacao = document.getElementById("cotacao");
  var valorCotacao = parseFloat(cotacao.value);
  var dolar = document.getElementById("valor");
  var valorEmDolar = parseFloat(dolar.value);
  var valorEmReal = valorEmDolar * valorCotacao;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O Valor em Reais é : ${valorEmReal}`;
  elementoValorConvertido.innerHTML = valorConvertido;
  var elementoValorBTC = document.getElementById("valorBTC");
  elementoValorBTC.innerHTML = `O Valor em Bitcoins é ${
    valorEmReal / 200000
  } no dia 17/03`;
}