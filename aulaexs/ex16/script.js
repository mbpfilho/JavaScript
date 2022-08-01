function contar(){
    var inicio=document.querySelector("#inicio").value
    var fim=document.querySelector("#fim").value
    var passo=document.querySelector("#passo").value
    if(inicio.length==0||fim.length==0||passo.length==0||inicio<0||fim<inicio){
        document.querySelector("#contando").innerHTML="ERRO: Entre valores válidos"
    }else{
        document.querySelector("#contando").innerHTML="Contando:<br>"
        let i=Number(inicio)
        let f=Number(fim)
        let p=Number(passo)
        if(p==0){
            window.alert("Passo 0 inválido. Considerado 1")
            document.querySelector("#passo").value=1
            p=1
        }
        while(i<=f){
            document.querySelector("#contando").innerHTML+=`${i}\u{1F449}`
            i+=p
        }
        document.querySelector("#contando").innerHTML+=`\u{1F3C1}`
    } 
}