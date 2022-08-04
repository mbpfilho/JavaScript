var numeros=[]
var lista=document.querySelector("#numeros")

function adicionar(){
    document.querySelector("#resposta").innerHTML=""
    let numerotxt=document.querySelector("#numero").value
    let numero=Number(numerotxt)
    if(numeros.indexOf(numero)!=-1){
        document.querySelector("#resposta").innerHTML="<p>ERRO: Valor já adicionado</p>"
    }else if(numerotxt.lenght==0||numero<1||numero>100){
        document.querySelector("#resposta").innerHTML="<p>ERRO: Valor inválido</p>"
    }else{
        numeros.push(numero)
        let item=document.createElement("option")
        item.text=`Valor ${numero} adicionado`
        item.value=`numero${numeros.lenght-1}`
        lista.appendChild(item)
    }
    /*for(let i in numeros){
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
    }*/
    document.querySelector("#numero").value=""
    document.querySelector("#numero").focus()
}

function finalizar(){
    if (numeros==""){
        document.querySelector("#resposta").innerHTML="<p>ERRO: Adicione valores antes de finalizar</p>"
    }else{
        numeros.sort()
        var soma=0
        /*let maior=numeros[0]
        let menor=numeros[0]*/
        for(let i in numeros){
            soma+=numeros[i]
            /*if(numeros[i]>maior){
                maior=numeros[i]
            }
            if(numeros[i]<menor){
                menor=numeros[i]
            }*/
        }
        var media=soma/(numeros.length)
        document.querySelector("#resposta").innerHTML=`<p>Ao todo temos ${numeros.length} números cadastrados</p>
        <p>O maior valor informado foi ${numeros[numeros.length-1]}</p>
        <p>O menor valor informado foi ${numeros[0]}</p>
        <p>Somando todos os valores temos ${soma}</p>
        <p>A média dos valores digitados é ${media}</p>`
    }
}
