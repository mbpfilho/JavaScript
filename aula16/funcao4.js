function fatorial(n){ 
    for(let i=n-1;i>1;i--){
        n*=i
    }
    return n
}
console.log(fatorial(5))