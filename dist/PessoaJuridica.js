"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
class PessoaJuridica {
    cnpj;
    razaoSocial;
    email;
    telefone;
    endereco;
    constructor(cnpj, razaoSocial, email, telefone, endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        '';
    }
    get Cnpj() {
        return this.cnpj;
    }
    set Cnpj(novocnpj) {
        if (novocnpj > 0) {
            this.cnpj = novocnpj;
        }
    }
    get RazaoSocial() {
        return this.razaoSocial;
    }
    set RazaoSocial(novarazaoSocial) {
        if (novarazaoSocial != "") {
            this.razaoSocial = novarazaoSocial;
        }
    }
    get Email() {
        return this.email;
    }
    set Email(novoemail) {
        if (novoemail != "") {
            this.email = novoemail;
        }
    }
    get Telefone() {
        return this.telefone;
    }
    set Telefone(novotelefone) {
        if (novotelefone != "") {
            this.telefone = novotelefone;
        }
    }
    get Endereco() {
        return this.endereco;
    }
    set Endereco(endereco) {
        if (endereco) {
            this.endereco = endereco;
        }
    }
    toString() {
        return ("CNPJ = " + this.cnpj +
            "\nRazão Social = " + this.razaoSocial +
            "\nEmail = " + this.email +
            "\nTelefone = " + this.telefone +
            "\nEndereço = " + this.endereco.toString());
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map