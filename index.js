const lista =  []

function adicionar()
{
  const numero = Number(document.getElementById('numero').value)
  
  if (numero < 1 || numero > 100 || lista.includes(numero))
    {
      alert('Numero invalido ou já existente')
    }else{
      document.getElementById('p0').style.display = 'none'
      lista.push(numero)
      const item = document.createElement('option')
      item.text = `Valor ${numero} adicionado`
      document.querySelector('select').appendChild(item)
    }
}

function finalizar()
{
  if (lista.length<1){
    alert('nem um valor adicionado')
  }
  else
  {  
    document.getElementById('p0').style.display ='block'
    const numerosCadastrados = document.getElementById("p1");
    const maiorNumero = document.getElementById("p2");
    const menorNumero = document.getElementById("p3");
    const somaTotal = document.getElementById("p4");
    const media = document.getElementById("p5");

    let maiorValor = lista[0]
    let menorValor = lista[0]
    let total = 0
  
    for (const i in lista)
    {
      total += lista[i]
      if(lista[i] > maiorValor)
        maiorValor = lista[i]
      if(lista[i] < menorValor)
        menorValor = lista[i] 
    }

    numerosCadastrados.innerText = `Ao total, temos ${lista.length} números cadastrado/s`;
    maiorNumero.innerText = `O maior valor informado foi ${maiorValor}`
    menorNumero.innerText = `O menor valor informado foi ${menorValor}`
    somaTotal.innerText = `Somando todos os valores, temos ${total}`
    media.innerText = `A média dos valores  é ${total/lista.length}`}
}

function limpar() {
  while (lista.length) {
    lista.pop();
  }
  
  document.getElementById("p0").style.display = "none";
  document.getElementById('select').innerText=''
  document.getElementById("numero").value = ''

}
    

    
    
