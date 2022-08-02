var numeros=[]
var lista=document.querySelector("#numeros")

function adicionar(){
    document.querySelector("#resposta").innerHTML=""
    let numerotxt=document.querySelector("#numero").value
    let numero=Number(numerotxt)
    for(let i in numeros){
        if(numero==numeros[i]){
            document.querySelector("#resposta").innerHTML="<p>ERRO: Valor já adicionado</p>"
            document.querySelector("#numero").value=""
            return
        }
    }
    if(numerotxt.lenght==0||numero<1||numero>100){
        document.querySelector("#resposta").innerHTML="<p>ERRO: Valor inválido</p>"
    }else{
        numeros.push(numero)
        let item=document.createElement("option")
        item.text=`Valor ${numero} adicionado`
        item.value=`numero${numeros.lenght-1}`
        lista.appendChild(item)
    }
    document.querySelector("#numero").value=""
}

function finalizar(){
    if (numeros==""){
        document.querySelector("#resposta").innerHTML="<p>ERRO: Adicione valores andte de finalizar</p>"
    }else{
        numeros.sort()
        var soma=0
        for(var i in numeros){
            soma+=numeros[i]
        }
        var media=soma/(numeros.length)
        document.querySelector("#resposta").innerHTML=`<p>Ao todo temos ${numeros.length} números cadastrados</p>
        <p>O maior valor informado foi ${numeros[numeros.length-1]}</p>
        <p>O menor valor informado foi ${numeros[0]}</p>
        <p>Somando todos os valores temos ${soma}</p>
        <p>A média dos valores digitados é ${media}</p>`
    }
}
