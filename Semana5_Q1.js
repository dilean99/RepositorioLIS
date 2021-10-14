function createList(valor,mensagem) {
  var quant = window.prompt("Digite a quantidade: ");
  var nome = window.prompt("Digite o nome da lista :");
  for (i=0; i<quant;i++){
    var lista = document.createElement("LI");
    var textnode = document.createTextNode(nome+ "" + i+1);
    var textnode = document.createTextNode(nome);
    lista.appendChild(textnode);
    document.getElementById("myList").appendChild(lista);
  };
  };
