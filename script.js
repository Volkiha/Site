function atualizarDataHora(){
    var dataHoraElemento = document.getElementById("dataHora");
    var dataHoraAtual = new Date();

    //formatando a data e a hora

    var dataFormatada = dataHoraAtual.toLocaleDateString();
    var horaFormatada = dataHoraAtual.toLocaleTimeString();

    //Exibindo data e hora
    dataHoraElemento.textContent = "Data: " + dataFormatada + " | Hora: " + horaFormatada
    //atualizar a cada segundo
    setTimeout(atualizarDataHora, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    atualizarDataHora();
});