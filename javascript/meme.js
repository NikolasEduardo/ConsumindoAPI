const a = document.querySelector("#testeclick");
const botao1 = document.getElementById('1');
const botao2 = document.getElementById('2');
const botao3 = document.getElementById('3');
const botao4 = document.getElementById('4');
const botao5 = document.getElementById('5');
const botao6 = document.getElementById('6');

const escrever = document.getElementById('info');

var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var valor6 = 0;

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao1.addEventListener('click', function () {
            if (valor1 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa1.easteregg;
                botao1.innerHTML = ("Luciano Ama Pobre")
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa1.imagem;
                botao1.innerHTML = ("Luciano Huck")
                valor1++;
            }
            a.href = jsondata.pessoa1.link;
            escrever.innerHTML = ("Nome: " + jsondata.pessoa1.nome + '<br> Profissão: ' + jsondata.pessoa1.profissao + ' <br> Idade: ' + jsondata.pessoa1.idade + " Anos." + ' <br> Foto: ');
        }));

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao2.addEventListener('click', function () {
            if (valor2 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa2.easteregg;
                botao2.innerHTML = ("Atacante Elizabeth")
                escrever.innerHTML = ("Nome: " + jsondata.pessoa2.nome + '<br> Profissão: ' + jsondata.pessoa2.profissao + " <br> Idade: Jogando no Vasco." + ' <br> Foto: ');
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa2.imagem;
                escrever.innerHTML = ("Nome: " + jsondata.pessoa2.nome + '<br> Profissão: ' + jsondata.pessoa2.profissao + ' <br> Idade: ' + jsondata.pessoa2.idade + " Anos." + ' <br> Foto: ');
                botao2.innerHTML = ("Rainha Elizabeth")
                valor2++;
            }
            a.href = jsondata.pessoa2.link;
        }));

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao3.addEventListener('click', function () {
            if (valor3 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa3.easteregg;
                botao3.innerHTML = ("Ash Emoji PUT-")
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa3.imagem;
                botao3.innerHTML = ("Ash Ketchum")
                valor3++;
            }
            a.href = jsondata.pessoa3.link;
            escrever.innerHTML = ("Nome: " + jsondata.pessoa3.nome + '<br> Profissão: ' + jsondata.pessoa3.profissao + ' <br> Idade: ' + jsondata.pessoa3.idade + " Anos." + ' <br> Foto: ');
        }));

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao4.addEventListener('click', function () {
            if (valor4 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa4.easteregg;
                botao4.innerHTML = ("Tanjiro Bugado")
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa4.imagem;
                botao4.innerHTML = ("Tanjiro Kamado")
                valor4++;
            }
            a.href = jsondata.pessoa4.link;
            escrever.innerHTML = ("Nome: " + jsondata.pessoa4.nome + '<br> Profissão: ' + jsondata.pessoa4.profissao + ' <br> Idade: ' + jsondata.pessoa4.idade + " Anos." + ' <br> Foto: ');
        }));

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao5.addEventListener('click', function () {
            if (valor5 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa5.easteregg;
                botao5.innerHTML = ("Legoshi Dancinha")
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa5.imagem;
                botao5.innerHTML = ("Legoshi")
                valor5++;
            }
            a.href = jsondata.pessoa5.link;
            escrever.innerHTML = ("Nome: " + jsondata.pessoa5.nome + '<br> Profissão: ' + jsondata.pessoa5.profissao + ' <br> Idade: ' + jsondata.pessoa5.idade + " Anos." + ' <br> Foto: ');
        }));

fetch('json/meme.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata =>
        botao6.addEventListener('click', function () {
            if (valor6 == 10) {
                document.getElementById('imagemtroca').src = jsondata.pessoa6.easteregg;
                botao6.innerHTML = ("Izuku Creonça")
            } else {
                document.getElementById('imagemtroca').src = jsondata.pessoa6.imagem;
                botao6.innerHTML = ("Izuku Midoriya")
                valor6++;
            }
            a.href = jsondata.pessoa6.link;
            escrever.innerHTML = ("Nome: " + jsondata.pessoa6.nome + '<br> Profissão: ' + jsondata.pessoa6.profissao + ' <br> Idade: ' + jsondata.pessoa6.idade + " Anos." + ' <br> Foto: ');
        }));
