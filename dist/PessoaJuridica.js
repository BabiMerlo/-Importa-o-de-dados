"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
class PessoaJuridica {
    _cnpj;
    _razaoSocial;
    _email;
    _telefone;
    _endereco;
    constructor(cnpj, razaoSocial, email, telefone, endereco) {
        this._cnpj = cnpj;
        this._razaoSocial = razaoSocial;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    get cnpj() {
        return this._cnpj;
    }
    get razaoSocial() {
        return this._razaoSocial;
    }
    set razaoSocial(novarazaoSocial) {
        if (novarazaoSocial != "") {
            this._razaoSocial = novarazaoSocial;
        }
    }
    get email() {
        return this._email;
    }
    set email(novoEmail) {
        if (novoEmail != "") {
            this._email = novoEmail;
        }
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(novoTelefone) {
        if (novoTelefone != "") {
            this._telefone = novoTelefone;
        }
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(endereco) {
        if (endereco) {
            this._endereco = endereco;
        }
    }
    toString() {
        return ("CNPJ = " + this._cnpj +
            "\nRazão Social = " + this._razaoSocial +
            "\nEmail = " + this._email +
            "\nTelefone = " + this._telefone +
            "\nEndereço = " + this._endereco.toString());
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map