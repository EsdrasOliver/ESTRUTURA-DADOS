class No {
    constructor(key){
        this.key = key;
        this.esquerda = null;
        this.direta = null;
        this.pai = null;
        this.altura = null;
    }

    pegarAlt(){
        var alt = (this.pai == null) ? 0 : this.pai.altura + 1;
        this.altura = alt;
        return this.altura;
    }
}

module.exports = No;