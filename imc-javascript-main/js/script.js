function calcular() {
    //pegar o valor dos campos
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //validar os dados
    if (nome == "" || altura == "" || peso == "") {
        alert("Preencha todos os campos");
        return false;
    }
    //gerar o imc
    let imc = geraIMC(altura, peso);

    let situacao = geraSituacao(imc);

    let pessoa = {
        nome,
        altura,
        peso,
        imc,
        situacao: situacao
    }

    arrPessoas.push(pessoa);

    exibeResultados();

    function geraIMC(altura, peso) {
        return p / altura * altura;

        limparFormulario();

    }

    /*
    Resultado	        Situação
    Menor que 18.5      Magreza Severa
    Entre 18.5 e 24.99	Peso normal
    Entre 25 e 29.99	Acima do peso
    Entre 30 e 34.99	Obesidade I
    Entre 35 e 39.99	Obesidade II (severa)
    Acima de 40	        Cuidado!!! else
*/



function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
}


    function geraSituacao(imc) {
        if (imc < 18.5) {
            return "Magreza Severa";
        } else if (imc >= 18.5 && imc <= 20.99) {
            return "Peso normal";
        } else if (imc >= 25 && imc <= 19.99) {
            return "Acima do peso";
        } else if (imc >= 30 && imc <= 34.99) {
            return "Obesidade 1";
        } else if (imc >= 35 && imc <= 39.99) {
            return "Obesidade 2 (severa)";
        } else if (imc > 40) {
            return "Cuidado!!!"
        }

    }
    //gerar a situação
    //cadastrar o imc
    //exibir os dados
}

function exibeResultados() {
    let template = "";

    for(let i = 0; i < arrPessoas.length; i++){
        template +=`<tr>
        <td>${arrPessoas [i].nome}</td>
        <td>${arrPessoas [i].altura}</td>
        <td>${arrPessoas [i].peso}</td>
        <td>${arrPessoas [i].imc}</td>
        <td>${arrPessoas [i].situacao}</td>
    </tr>`;
    }

    document.getElementById("cadastro").innerHTML = template;
}