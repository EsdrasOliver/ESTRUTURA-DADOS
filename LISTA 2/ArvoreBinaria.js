class ArvoreBinaria {
    constructor () {
        this.raiz = null;
    }

    Insert(z){
        var y = null;
        var x = this.raiz;
    
        while(x != null){
            y = x;
            if(z.key < y.key){
                x = x.esquerda;
            }else{
                x = x.direita;
            }
        }

        z.pai = y;
        z.altura = (y == null) ? 0 : z.pai.altura + 1;

        if(y == null){
            this.raiz = z;
        }else if(z.key < y.key){
            y.esquerda = z;
        }else{
            y.direita = z;
        }

        return z.altura;
    }

    ProcurarMax(x){
        while (x.direita != null){
            x = x.direita;
        }
        return x;
    }

    ProcurarAnt(x){
        if(x.esquerda != null){
            return this.ProcurarMax(x.esquerda);
        }
        var y = x.pai;

        while(y != null & x == y.esquerda){
            x = y;
            y = y.pai;
        }
        return y;
    }

    Procurar(x, key){
        if(x == null || key == x.key) {
            return x;
        }

        if(key < x.key) {
            return this.Procurar(x.esquerda, key)
        } else {
            return this.Procurar(x.direita, key)
        }
    }

    ProcurarMin(x){
        while (x.esquerda != null){
            x = x.esquerda;
        }
        return x; 
    }

    ProcurarProx(x){
        if(x.direita != null){
            return this.ProcurarMin(x.direita);
        }
        y = x.pai;
        while(y != null & x == y.direita){
            x = y;
            y = y.pai;
        }
        return y;
    }

    VerificarArray(x, vetor = []){
        if(x != null){
            this.VerificarArray(x.esquerda, vetor)
            vetor.push(x)
            this.VerificarArray(x.direita, vetor)
        }
        return vetor;
    }

    Soma(x){
        var key = (x != null) ? x.key : 0
        var direita = (x != null) ? this.Soma(x.direita) : 0
        var esquerda = (x != null) ? this.Soma(x.esquerda) : 0

        return key + direita + esquerda;
    }

    Verificar(x){
        if(x != null){
            this.Verificar(x.esquerda);
            this.Verificar(x.direita);
        }
    }

    Delete(x) {
        var y 
        var z  

        if(x.esquerda == null || x.direita == null) {
            y = x
        } else {
            y = this.ProcurarProx(x)
        }

        if(y.esquerda != null) {
            z = y.esquerda
        } else {
            z = y.direita
        }

        if(z != null) {
            z.pai = y.pai
        }

        if(y.pai == null) {
            this.raiz = z
        } else if(y == y.pai.esquerda) {
            y.pai.esquerda = z
        } else {
            y.pai.direita = z
        }

        if(y != x) {
            x.key = y.key
        }

        return y
    }
}

module.exports = ArvoreBinaria;
