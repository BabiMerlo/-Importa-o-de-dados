"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_1 = require("./Endereco");
const PessoaJuridica_1 = require("./PessoaJuridica");
const insumoAPI_1 = require("./insumoAPI");
const RepositorioPessoaJuridica_1 = require("./RepositorioPessoaJuridica");
const repositorio = new RepositorioPessoaJuridica_1.RepositorioPessoaJuridica();
function criarEmpresa(cnpj) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const dadosEmpresa = await insumoAPI_1.insumoAPI.consultaCNPJ(cnpj);
                const cep = dadosEmpresa.cep.replace(/\D/g, "");
                const dadosCep = await insumoAPI_1.insumoAPI.consultarCEP(cep);
                const endereco = new Endereco_1.Endereco(Number(cep), dadosCep.logradouro, dadosCep.bairro, dadosCep.uf, Number(dadosCep.ddd));
                const empresa = new PessoaJuridica_1.PessoaJuridica(cnpj, dadosEmpresa.nome, dadosEmpresa.email, dadosEmpresa.telefone, endereco);
                resolve(empresa);
            }
            catch (erro) {
                reject(erro);
            }
        }, 21000);
    });
}
async function main() {
    const cnpjs = [
        "33000167000101",
        "00000000000191",
        "00360305000104",
        "10838653001501",
        "45997418002954",
        "10838653000289",
        "28053619000183"
    ];
    console.log("=== CONSULTANDO EMPRESAS ===\n");
    for (const cnpj of cnpjs) {
        try {
            const empresa = await criarEmpresa(cnpj);
            repositorio.adicionar(empresa);
            console.log(`Empresa adicionada: ${empresa.razaoSocial}`);
        }
        catch (erro) {
            console.log(`Erro ao consultar CNPJ ${cnpj}: ${erro.message}`);
        }
    }
    console.log("\n=== LISTA DE EMPRESAS ===\n");
    repositorio.listar().forEach((empresa) => {
        console.log(empresa.toString());
        console.log("\n-----------------------------------\n");
    });
}
main();
//# sourceMappingURL=index.js.map