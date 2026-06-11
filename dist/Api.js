"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarCNPJPromise = consultarCNPJPromise;
exports.consultarCEPPromise = consultarCEPPromise;
function consultarCNPJPromise(cnpj) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!/^\d{14}$/.test(cnpj)) {
                reject(new Error("CNPJ inválido. Deve conter 14 dígitos."));
                return;
            }
            const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
            if (!response.ok) {
                reject(new Error(`Erro HTTP ${response.status}`));
                return;
            }
            const dados = await response.json();
            if (dados.status == "ERROR") {
                reject(new Error(dados.message));
                return;
            }
            resolve(dados);
        }
        catch {
            reject(new Error("Erro ao consultar ReceitaWS"));
        }
    });
}
function consultarCEPPromise(cep) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!/^\d{8}$/.test(cep)) {
                reject(new Error("CEP inválido. Deve conter 8 dígitos."));
                return;
            }
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) {
                reject(new Error(`Erro HTTP ${response.status}`));
                return;
            }
            const dados = await response.json();
            if ("erro" in dados) {
                reject(new Error("CEP não encontrado."));
                return;
            }
            resolve(dados);
        }
        catch {
            reject(new Error("Erro ao consultar ViaCEP."));
        }
    });
}
//# sourceMappingURL=Api.js.map