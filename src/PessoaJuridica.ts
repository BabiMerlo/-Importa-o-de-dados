import { Endereco } from "./Endereco";

export class PessoaJuridica  {

    private _cnpj: string;
    private _razaoSocial: string;
    private _email: string;
    private _telefone: string;
    private _endereco: Endereco;

    constructor(cnpj: string, razaoSocial: string, email: string, telefone: string, endereco: Endereco) {
        this._cnpj = cnpj;
        this._razaoSocial = razaoSocial;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
    }


    public get cnpj(): string {
        return this._cnpj;
    }

    public get razaoSocial(): string {
        return this._razaoSocial;
    }

    public set razaoSocial(novarazaoSocial: string) {
        if (novarazaoSocial != "") {
            this._razaoSocial = novarazaoSocial;
        }
    }

    public get email(): string {
        return this._email;
    }
    public set email(novoEmail: string) {
        if (novoEmail != "") {
            this._email = novoEmail;
        }
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(novoTelefone: string) {
        if (novoTelefone != "") {
            this._telefone = novoTelefone;
        }
    }

    public get endereco(): Endereco {
        return this._endereco;
    }

    public set endereco(endereco: Endereco) {
        if (endereco) {
            this._endereco = endereco;
        }
    }

    toString(): string {
        return (
            "CNPJ = " + this._cnpj +
            "\nRazão Social = " + this._razaoSocial +
            "\nEmail = " + this._email +
            "\nTelefone = " + this._telefone +
            "\nEndereço = " + this._endereco.toString()
        );
    }
}