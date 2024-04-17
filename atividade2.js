function lancamentoFoguete() {
    let contagem = 10;
    let sequencia = setInterval (
        function contagemLancamento () {
            console.log(contagem);
            contagem--;


            if(contagem == 5) {
                console.log ('Ignição...');
            }
            if(contagem < 1) {
                clearInterval (sequencia)
                console.log ('Fogo...');
            }
        }
    ,1000);
}
