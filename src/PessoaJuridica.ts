import { Endereco } from "./Endereco";

export class PessoaJuridica  {

    private cnpj: number;
    private razaoSocial: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;

    constructor(cnpj: number, razaoSocial: string, email: string, telefone: string, endereco: Endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco; ''
    }


    public get Cnpj(): number {
        return this.cnpj;
    }
    public set Cnpj(novocnpj: number) {
        if (novocnpj > 0) {
            this.cnpj = novocnpj;
        }
    }

    public get RazaoSocial(): string {
        return this.razaoSocial;
    }

    public set RazaoSocial(novarazaoSocial: string) {
        if (novarazaoSocial != "") {
            this.razaoSocial = novarazaoSocial;
        }
    }

    public get Email(): string {
        return this.email;
    }
    public set Email(novoemail: string) {
        if (novoemail != "") {
            this.email = novoemail;
        }
    }

    public get Telefone(): string {
        return this.telefone;
    }

    public set Telefone(novotelefone: string) {
        if (novotelefone != "") {
            this.telefone = novotelefone;
        }
    }

    public get Endereco(): Endereco {
        return this.endereco;
    }

    public set Endereco(endereco: Endereco) {
        if (endereco) {
            this.endereco = endereco;
        }
    }

    toString(): string {
        return (
            "CNPJ = " + this.cnpj +
            "\nRazão Social = " + this.razaoSocial +
            "\nEmail = " + this.email +
            "\nTelefone = " + this.telefone +
            "\nEndereço = " + this.endereco.toString()
        );
    }
}