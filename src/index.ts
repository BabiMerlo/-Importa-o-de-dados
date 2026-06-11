import { Endereco } from "./Endereco";
import { PessoaJuridica } from "./PessoaJuridica";
import { RepositorioPessoaJuridica } from "./RepositorioPessoaJuridica";

const repositorio = new RepositorioPessoaJuridica();

async function consultarCNPJ(cnpj: string): Promise<any> {
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;

    const response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Erro HTTP ${response.status}`);
    }
}

async function consultarCEP(cep: string): Promise<any> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Erro HTTP ${response.status}`);
    }
}

async function criarEmpresa(cnpj: string): Promise<PessoaJuridica> {

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

            const endereco = new Endereco(
                Number(cep),
                dadosCep.logradouro,
                dadosCep.bairro,
                dadosCep.uf,
                Number(dadosCep.ddd)
            );

            const empresa = new PessoaJuridica(
                Number(cnpj),
                dadosEmpresa.nome,
                dadosEmpresa.email || "Não informado",
                dadosEmpresa.telefone || "Não informado",
                endereco
            );

            resolve(empresa);

        } catch (erro) {
            reject(erro);
        }
    });
}

async function main(): Promise<void> {

    const cnpjs = [
        "10838653001501"
    ];

    console.log("=== CONSULTANDO EMPRESAS ===\n");

    for (const cnpj of cnpjs) {

        try {

            const empresa = await criarEmpresa(cnpj);

            repositorio.adicionar(empresa);

            console.log(
                `Empresa adicionada: ${empresa.RazaoSocial}`
            );

        } catch (erro: any) {

            console.log(
                `Erro ao consultar CNPJ ${cnpj}: ${erro.message}`
            );

        }
    }

    console.log("\n=== TESTES DE ERROS ===\n");

    try {
        await consultarCNPJ("ABC123");
    } catch (erro: any) {
        console.log("Erro CNPJ com letras:");
        console.log(erro.message);
    }

    try {
        const dados = await consultarCNPJ("12345678900123");
        console.log(dados);
    } catch (erro: any) {
        console.log("Erro CNPJ inexistente:");
        console.log(erro.message);
    }

    try {
        await consultarCEP("ABCDE");
    } catch (erro: any) {
        console.log("Erro CEP inválido:");
        console.log(erro.message);
    }

    console.log("\n=== LISTA DE EMPRESAS ===\n");

    repositorio.listar().forEach((empresa) => {
        console.log(empresa.toString());
        console.log("\n-----------------------------------\n");
    });
}

main()
    .then(() => {
        console.log("Programa finalizado com sucesso!");
    })
    .catch((erro) => {
        console.log("Erro geral:", erro);
    });