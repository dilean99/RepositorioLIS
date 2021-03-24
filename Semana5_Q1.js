function createList(valor,mensagem) {
  let quant = window.prompt("Digite a quantidade: ");
  let nome = window.prompt("Digite o nome da lista :");
  for (i=0; i<quant;i++){
  let lista = document.createElement("LI");
  let textnode = document.createTextNode(nome,i+1);
  lista.appendChild(textnode);
  document.getElementById("myList").appendChild(lista);
};
}
