"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPessoaJuridica = void 0;
class RepositorioPessoaJuridica {
    listaPessoaJuridica;
    constructor() {
        this.listaPessoaJuridica = [];
    }
    adicionar(empresa) {
        this.listaPessoaJuridica.push(empresa);
        return true;
    }
    listar() {
        return this.listaPessoaJuridica;
    }
}
exports.RepositorioPessoaJuridica = RepositorioPessoaJuridica;
//# sourceMappingURL=RepositorioPessoaJuridica.js.map