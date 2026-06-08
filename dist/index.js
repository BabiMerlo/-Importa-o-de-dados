"use strict";
async function consultarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    else {
        throw new SyntaxError(`HTTP error! Status: ${response.status}`);
    }
}
async function displayDadosCep(cep) {
    try {
        const dados = await consultarCEP(cep);
        if ("erro" in dados) {
            console.log("CEP não encontrado!");
        }
        else {
            console.log(`Logradouro: ${dados.logradouro}\nCidade: ${dados.localidade}\nEstado: ${dados.estado}`);
        }
    }
    catch (error) {
        console.log(`Erro na API ViaCep\n${error.name}: ${error.message}`);
    }
}
console.log(consultarCEP("29650000"));
//# sourceMappingURL=index.js.map