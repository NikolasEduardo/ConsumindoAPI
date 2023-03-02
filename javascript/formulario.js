
//Função para o botão no index.html
function guardaFormulario() {
    //Criar um novo objeto para a variavel formCliente
    var formCliente = new Object();

    //Adicionar os dados no formCliente
    formCliente.nome = document.getElementById('nome').value;
    formCliente.sobrenome = document.getElementById('sobrenome').value;
    formCliente.idade = document.getElementById('idade').value;
    formCliente.telefone = document.getElementById('telefone').value;
    formCliente.cpf = document.getElementById('cpf').value;
    formCliente.gene = document.getElementById('gene').value;
    formCliente.sexo = document.getElementById('sexo').value;
    formCliente.cep = document.getElementById('cep').value;

    //Converter para JSON
    var json = JSON.stringify(formCliente);
    console.log(json)

    console.log(formCliente.valueOf());

    document.getElementById('nome1').innerHTML = formCliente.nome;
    document.getElementById('sobrenome1').innerHTML = formCliente.sobrenome;
    document.getElementById('idade1').innerHTML = formCliente.idade;
    document.getElementById('telefone1').innerHTML = formCliente.telefone;
    document.getElementById('cpf1').innerHTML = formCliente.cpf;
    document.getElementById('gene1').innerHTML = formCliente.gene;
    document.getElementById('sexo1').innerHTML = formCliente.sexo;
    document.getElementById('cep1').innerHTML = formCliente.cep;

    window.print();
}