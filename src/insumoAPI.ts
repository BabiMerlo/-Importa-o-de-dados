export class insumoAPI {

static async consultarCEP(cep: string): Promise<JSON> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new SyntaxError(`HTTP error! Status: ${response.status}`);
    }
}

 static async consultaCNPJ(cnpj: string): Promise<any> {
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    }

    throw new Error(`HTTP error! Status: ${response.status}`);
}
}