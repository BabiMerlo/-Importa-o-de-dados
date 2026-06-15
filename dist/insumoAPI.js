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
    static async consultaCNPJ(cnpj) {
        const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        if (response.status === 429) {
            console.log("Limite atingido. Aguardando 60 segundos para tentar novamente...");
            await new Promise(resolve => setTimeout(resolve, 60 * 1000));
            return this.consultaCNPJ(cnpj);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}
exports.insumoAPI = insumoAPI;
//# sourceMappingURL=insumoAPI.js.map