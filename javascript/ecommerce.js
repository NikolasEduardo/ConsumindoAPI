var audio = document.getElementById('audioPlayer');

function trocarlingua() {
    if (document.getElementById('linguagem').innerHTML == "Dublado") {
        document.getElementById('linguagem').innerHTML = "Original"
    } else {
        document.getElementById('linguagem').innerHTML = "Dublado"
    }
}
function pausarRetomar() {
    if (document.getElementById('pause').innerHTML == "Pausar") {
        document.getElementById('pause').innerHTML = "Retomar"
        audio.pause();
    } else {
        document.getElementById('pause').innerHTML = "Pausar"
        audio.play();
    }
}
function audioPart3() {
    if (document.getElementById('linguagem').innerHTML == "Dublado") {
        document.getElementById('audioPlayer').src = 'media/The-End-Of-The-World-Dublado.mp3'
    } else {
        document.getElementById('audioPlayer').src = 'media/The-End-Of-The-World-Original.mp3'
    }
    document.getElementById('pause').innerHTML = "Pausar"
}
function audioPart5() {
    if (document.getElementById('linguagem').innerHTML == "Dublado") {
        document.getElementById('audioPlayer').src = 'media/Uragirimono-no-Requiem-Dublado.mp3'
    } else {
        document.getElementById('audioPlayer').src = 'media/Uragirimono-no-Requiem-Original.mp3'
    }
    document.getElementById('pause').innerHTML = "Pausar"
}
function audioPart6() {
    if (document.getElementById('linguagem').innerHTML == "Dublado") {
        document.getElementById('audioPlayer').src = 'media/Heavens-Falling-Down-Dublado.mp3'
    } else {
        document.getElementById('audioPlayer').src = 'media/Heavens-Falling-Down-Original.mp3'
    }
    document.getElementById('pause').innerHTML = "Pausar"
}


//metodo fetch() para buscar o arquivo dados.json ou qualquer API, transformando o resultado em um objeto usando outro método response.json

fetch('json/ecommerce.json')
    .then(response => response.json())
    .then(corpo => {
        //Acessando os dados do objeto JSON e adicionando ao HTML dentro do elemento <div> usando a propriedade innerHTML

        document.getElementById('imagem1').innerHTML = corpo.stardustcrusaders.image;
        document.getElementById('nome1').innerHTML = corpo.stardustcrusaders.name;
        document.getElementById('disco1').innerHTML = corpo.stardustcrusaders.album;
        document.getElementById('estilo1').innerHTML = corpo.stardustcrusaders.style;
        document.getElementById('preco1').innerHTML = corpo.stardustcrusaders.price;

        document.getElementById('imagem2').innerHTML = corpo.goldenwind.image;
        document.getElementById('nome2').innerHTML = corpo.goldenwind.name;
        document.getElementById('disco2').innerHTML = corpo.goldenwind.album;
        document.getElementById('estilo2').innerHTML = corpo.goldenwind.style;
        document.getElementById('preco2').innerHTML = corpo.goldenwind.price;

        document.getElementById('imagem3').innerHTML = corpo.stoneocean.image;
        document.getElementById('nome3').innerHTML = corpo.stoneocean.name;
        document.getElementById('disco3').innerHTML = corpo.stoneocean.album;
        document.getElementById('estilo3').innerHTML = corpo.stoneocean.style;
        document.getElementById('preco3').innerHTML = corpo.stoneocean.price;
    });