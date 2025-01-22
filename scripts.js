function gerarNumero(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    if(max <= min){
        alert("O valor mínimo tem que ser MENOR que o máximo")
    } else{
        alert(resultado)
    }
}