async function consultarCEP(cep: string): Promise<JSON> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new SyntaxError(`HTTP error! Status: ${response.status}`);
    }
}
async function displayDadosCep(cep: string): Promise<void> {

    try {
        const dados: JSON | any = await consultarCEP(cep);

        if ("erro" in dados) {
            console.log("CEP não encontrado!");
        } else {
            console.log(`Logradouro: ${dados.logradouro}\nCidade: ${dados.localidade}\nEstado: ${dados.estado}`);
        }
    } catch (error: any) {
        console.log(`Erro na API ViaCep\n${error.name}: ${error.message}`);
    }
}

async function consultaCNPJ(cnpj: string): Promise<any> {
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    }

    throw new Error(`HTTP error! Status: ${response.status}`);
}

async function displayDadosCnpj(cnpjs: string[]): Promise<void> {
    for (const cnpj of cnpjs) {
        try {
            const dados = await consultaCNPJ(cnpj);

            if (dados.status === "ERROR") {
                console.log(`CNPJ não encontrado: ${dados.message}`);
            } else {
                console.log(`
Empresa: ${dados.nome}
Fantasia: ${dados.fantasia}
CNPJ: ${dados.cnpj}
Situação: ${dados.situacao}
                `);
            }
        } catch (error: any) {
            console.log(`Erro ao consultar ${cnpj}`);
            console.log(`${error.name}: ${error.message}`);
        }
    }
}

const cnpjs = ["45997418000153", "17140820000262"]

displayDadosCep("29665000")
displayDadosCnpj(cnpjs)