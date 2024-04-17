function mawer() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let mes = 1; mes <= 12; mes++) {
        let ganhoMes = parseFloat(prompt("Digite o ganho bruto para o mês " + mes + ":"));

        if (!isNaN(ganhoMes)) {
            ganhoAnual += ganhoMes;
        } else {
            alert("Por favor, digite um valor numérico para o ganho bruto.");
            return; 
        }

        let gastoMes = parseFloat(prompt("Digite os gastos para o mês " + mes + ":"));

        if (!isNaN(gastoMes)) {
            gastoAnual += gastoMes;
        } else {
            alert("Por favor, digite um valor numérico para os gastos.");
            return;
        }
    }

    let saldoFinanceiro = ganhoAnual - gastoAnual;
    let mensagem = "Ganho bruto anual: " + ganhoAnual + "\n";
    mensagem += "Gasto anual: " + gastoAnual + "\n";
    mensagem += "Saldo financeiro: " + saldoFinanceiro + "\n";

    if (saldoFinanceiro > 0) {
        mensagem += "A empresa teve lucro.";
    } else if (saldoFinanceiro < 0) {
        mensagem += "A empresa teve prejuízo.";
    } else {
        mensagem += "A empresa não teve lucro nem prejuízo.";
    }

    alert(mensagem);
}
