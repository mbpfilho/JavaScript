function tabuada(){
    var numero=Number(document.querySelector("#numero").value)
    if(numero==""){
        window.alert("ERRO: entre um valor")
    }else{
        document.querySelector("#tabuada").innerHTML=""
        for(var i=1;i<=10;i++){
            document.querySelector("#tabuada").innerHTML+=`${numero} X ${i} = ${numero*i}<br>`
        }
    }
}