export class Caixa {
    _id : number;
    name: String;
    mes: Number;
    ano: Number;
    credito: [{
        name: String;
        value: Number
    }]
    debito: [{
        name: String;
        value: Number;
        status : String
    }]
}
