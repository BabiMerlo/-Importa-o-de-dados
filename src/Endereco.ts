export class Endereco {
    private _cep: number;
    private _logradouro: string;
    private _bairro: string;
    private _estado: string;
    private _ddd: number;

    constructor(cep: number, logradouro: string, bairro: string, estado: string, ddd: number) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._bairro = bairro;
        this._estado = estado;
        this._ddd = ddd;
    }

    public get cep() : number {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro
    }

    public set logradouro(novoLogradouro: string)  {
        if (novoLogradouro != "") {
            this._logradouro = novoLogradouro;
        }        
    }

    public get bairro(): string {
        return this._bairro
    }

    public set bairro(novoBairro: string)  {
        if (novoBairro != "") {
            this._bairro = novoBairro;
        }        
    }

    public get estado(): string {
        return this._estado
    }

    public set estado(novoEstado: string)  {
        if (novoEstado != "") {
            this._estado = novoEstado;
        }        
    }

    public get ddd(): number {
        return this._ddd
    }

    public set ddd(novoDDD: number)  {
        if (novoDDD != 0) {
            this._ddd = novoDDD;
        }        
    }

    public toString(): string{
        return "Endereço:\n"+
            "\nCEP : " + this._cep +
            "\nLogradouro : " + this._logradouro +
            "\nBairro : " + this._bairro +
            "\nEstado : " + this._estado +
            "\nDDD : " + this._ddd;
    }
}