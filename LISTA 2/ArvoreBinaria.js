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

    // procura o anterior 
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
}

module.exports = ArvoreBinaria;
