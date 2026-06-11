"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_1 = require("./Endereco");
const PessoaJuridica_1 = require("./PessoaJuridica");
const RepositorioPessoaJuridica_1 = require("./RepositorioPessoaJuridica");
const repositorio = new RepositorioPessoaJuridica_1.RepositorioPessoaJuridica();
async function consultarCNPJ(cnpj) {
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error(`Erro HTTP ${response.status}`);
    }
}
async function consultarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error(`Erro HTTP ${response.status}`);
    }
}
async function criarEmpresa(cnpj) {
    setTimeout(() => {
        return new Promise(async (resolve, reject) => {
            try {
                const dadosEmpresa = await consultarCNPJ(cnpj);
                if (dadosEmpresa.status === "ERROR") {
                    reject(new Error(`Erro ReceitaWS: ${dadosEmpresa.message}`));
                    return;
                }
                const cep = dadosEmpresa.cep.replace(/\D/g, "");
                const dadosCep = await consultarCEP(cep);
                if ("erro" in dadosCep) {
                    reject(new Error("CEP não encontrado."));
                    return;
                }
                const endereco = new Endereco_1.Endereco(Number(cep), dadosCep.logradouro, dadosCep.bairro, dadosCep.uf, Number(dadosCep.ddd));
                const empresa = new PessoaJuridica_1.PessoaJuridica(Number(cnpj), dadosEmpresa.nome, dadosEmpresa.email || "Não informado", dadosEmpresa.telefone || "Não informado", endereco);
                resolve(empresa);
            }
            catch (erro) {
                reject(erro);
            }
        });
    }, 21000);
}
async function main() {
    const cnpjs = [
        "10838653001501"
    ];
    console.log("=== CONSULTANDO EMPRESAS ===\n");
    for (const cnpj of cnpjs) {
        try {
            const empresa = await criarEmpresa(cnpj);
            repositorio.adicionar(empresa);
            console.log(`Empresa adicionada: ${empresa.RazaoSocial}`);
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
//# sourceMappingURL=index.js.map