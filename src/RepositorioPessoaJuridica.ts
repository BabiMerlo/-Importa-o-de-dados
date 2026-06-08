import { PessoaJuridica } from "./PessoaJuridica";

export class RepositorioPessoaJuridica {
    private listaPessoaJuridica: Array<PessoaJuridica>;

    constructor() {
        this.listaPessoaJuridica = [];
    }

    public adicionar(empresa: PessoaJuridica): boolean {
        this.listaPessoaJuridica.push(empresa);
        return true;
    }

    public listar(): Array<PessoaJuridica> {
        return this.listaPessoaJuridica;
    }
}
