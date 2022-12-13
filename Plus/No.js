class No {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
        this.pai = null;
        this.alt = null;
    }

    getAlt(){
        var _alt = (this.pai == null) ? 0 : this.pai.alt + 1;
        this.alt = _alt;
        return this.alt;
    }
}

module.exports = No;