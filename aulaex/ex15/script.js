function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById("txtano")
    var res=document.getElementById("res")
    if(fano.value.length<4||Number(fano.value)>ano){
        window.alert("ERRO: Verifique os dados e tente novamente")
    }else{
        var fsex=document.getElementsByName("radsex")
        var idade=ano-Number(fano.value)
        var genero=""
        var img=document.createElement("img")
        img.setAttribute("id","foto")
        img.setAttribute("style","border-radius:10px ")
        if(fsex[0].checked){
            genero="Homem"
            if(idade<10){
                //bebe
                img.setAttribute("src","bebem.jpg")
            }else if(idade<25){
                //jovem
                img.setAttribute("src","jovemm.jpg")
            }else if(idade<60){
                //adulto
                img.setAttribute("src","adultom.jpg")
            }else{
                //idoso
                img.setAttribute("src","idosom.jpg")
            }
        }else if(fsex[1].checked){
            genero="Mulher"
            if(idade<10){
                //bebe
                img.setAttribute("src","bebef.jpg")
            }else if(idade<25){
                //jovem
                img.setAttribute("src","jovemf.jpg")
            }else if(idade<60){
                //adulto
                img.setAttribute("src","adultof.jpg")
            }else{
                //idoso
                img.setAttribute("src","idosof.jpg")
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}