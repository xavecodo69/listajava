function vogalConsoante (){


    let letra = prompt("Digite uma letra:");

    if (letra.length !== 1) {
        alert("Por favor, digite apenas uma letra.");
        return;
    }

    letra = letra.toLowerCase();
   
    if (/[aeiou]/.test(letra)) {
        alert("A letra digitada é uma vogal.");
    } else if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
        alert("A letra digitada é uma consoante.");
    } else {
        alert("O caractere digitado não é uma letra.");
    }
}
