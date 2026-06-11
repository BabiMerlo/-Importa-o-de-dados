"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insumoAPI = void 0;
class insumoAPI {
    static async consultarCEP(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new SyntaxError(`HTTP error! Status: ${response.status}`);
        }
    }
    static async displayDadosCep(cep) {
        try {
            const dados = await insumoAPI.consultarCEP(cep);
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
    static async consultaCNPJ(cnpj) {
        const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    static async displayDadosCnpj(cnpj) {
        try {
            const dados = await insumoAPI.consultaCNPJ(cnpj);
            if (dados.status === "ERROR") {
                console.log(`CNPJ não encontrado: ${dados.message}`);
            }
            else {
                console.log(`
Empresa: ${dados.nome}
Fantasia: ${dados.fantasia}
CNPJ: ${dados.cnpj}
Situação: ${dados.situacao}
            `);
            }
        }
        catch (error) {
            console.log(`Erro ao consultar ${cnpj}`);
            console.log(`${error.name}: ${error.message}`);
        }
    }
}
exports.insumoAPI = insumoAPI;
//# sourceMappingURL=insumoAPI.js.map