import { Endereco } from "./Endereco";
import { PessoaJuridica } from "./PessoaJuridica";
import { insumoAPI } from "./insumoAPI";
import { RepositorioPessoaJuridica } from "./RepositorioPessoaJuridica";

const repositorio = new RepositorioPessoaJuridica();

function criarEmpresa(cnpj: string): Promise<PessoaJuridica> {

    return new Promise((resolve, reject) => {

        setTimeout(async () => {

            try {

                const dadosEmpresa = await insumoAPI.consultaCNPJ(cnpj);

                if (dadosEmpresa.status === "ERROR") {
                    reject(new Error(`Erro ReceitaWS: ${dadosEmpresa.message}`));
                    return;
                }

                const cep = dadosEmpresa.cep.replace(/\D/g, "");

                const dadosCep: any = await insumoAPI.consultarCEP(cep);

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
                    cnpj,
                    dadosEmpresa.nome,
                    dadosEmpresa.email || "Não informado",
                    dadosEmpresa.telefone || "Não informado",
                    endereco
                );

                resolve(empresa);

            } catch (erro) {
                reject(erro);
            }

        }, 21000);

    });
}


async function main(): Promise<void> {

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

            console.log(
                `Empresa adicionada: ${empresa.razaoSocial}`
            );

        } catch (erro: any) {

            console.log(
                `Erro ao consultar CNPJ ${cnpj}: ${erro.message}`
            );

        }
    }


    console.log("\n=== LISTA DE EMPRESAS ===\n");

    repositorio.listar().forEach((empresa) => {
        console.log(empresa.toString());
        console.log("\n-----------------------------------\n");
    });
}
main()