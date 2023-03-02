
fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json();
}).then(economia => {
    console.log(economia);
    document.getElementById("dolar").value = economia.USDBRL.bid * document.getElementById("real").value
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            window.location.reload(true);
        }
    }, 30);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};