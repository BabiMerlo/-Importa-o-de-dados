"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    _cep;
    _logradouro;
    _bairro;
    _estado;
    _ddd;
    constructor(cep, logradouro, bairro, estado, ddd) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._bairro = bairro;
        this._estado = estado;
        this._ddd = ddd;
    }
    get cep() {
        return this._cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    set logradouro(novoLogradouro) {
        if (novoLogradouro != "") {
            this._logradouro = novoLogradouro;
        }
    }
    get bairro() {
        return this._bairro;
    }
    set bairro(novoBairro) {
        if (novoBairro != "") {
            this._bairro = novoBairro;
        }
    }
    get estado() {
        return this._estado;
    }
    set estado(novoEstado) {
        if (novoEstado != "") {
            this._estado = novoEstado;
        }
    }
    get ddd() {
        return this._ddd;
    }
    set ddd(novoDDD) {
        if (novoDDD != 0) {
            this._ddd = novoDDD;
        }
    }
    toString() {
        return "Endereço:\n" +
            "\nCEP : " + this._cep +
            "\nLogradouro : " + this._logradouro +
            "\nBairro : " + this._bairro +
            "\nEstado : " + this._estado +
            "\nDDD : " + this._ddd;
    }
}
exports.Endereco = Endereco;
//# sourceMappingURL=Endereco.js.map