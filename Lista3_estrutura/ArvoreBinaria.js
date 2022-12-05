class ArvoreBinaria {
    constructor () {
        this.raiz = null;
    }

    Verificar(x){
        if(x != null){
            this.Verificar(x.left);
            console.log(x.key)
            this.Verificar(x.right);
        }
    }

    VerificarArray(x, vetor = []){
        if(x != null){
            this.VerificarArray(x.left, vetor);
            vetor.push(x);
            this.VerificarArray(x.right, vetor);
        }
        return vetor;
    }
    
    search(x, key) {
        if(x === null || key === x.key){
            return x;
        }
        if(key < x.key) {
            return this.search(x.left, key)
        } else {
            return this.search(x.right, key)
        }
    }

    SearchMax(x){
        while (x.right != null){
            x = x.right;
        }
        return x;
    }

    SomarFolhas(x){
        var key = (x != null) ? x.key : 0
        var right = (x != null) ? this.SomarFolhas(x.right) : 0
        var left = (x != null) ? this.SomarFolhas(x.left) : 0

        return key + right + left;
    }

    SearchMin(x){
        while (x.left != null){
            x = x.left;
        }
        return x; 
    }

    SearchProx(x){
        if(x.right != null){
            return this.SearchMin(x.right);
        }
        y = x.pai;
        while(y != null & x == y.right){
            x = y;
            y = y.pai;
        }
        return y;
    }

    SearchAnt(x){
        if(x.left != null){
            return this.SearchMax(x.left);
        }
        var y = x.pai;

        while(y != null & x == y.left){
            x = y;
            y = y.pai;
        }
        return y;
    }

    InsertNode(z){
        var y = null;
        var x = this.raiz;
    
        while(x != null){
            y = x;
            if(z.key < y.key){
                x = x.left;
            }else{
                x = x.right;
            }
        }

        z.pai = y;
        z.alt = (y == null) ? 0 : z.pai.alt + 1;

        if(y == null){
            this.raiz = z;
        }else if(z.key < y.key){
            y.left = z;
        }else{
            y.right = z;
        }

        return z.alt;
    }

    Delete(z){
        var y;
        var x;

        if(z.left == null || z.right == null){
            y = z;
        }else{
            y = this.SearchProx(z);
        }

        if(y.left != null){
            x = y.left;
        }else{
            x = y.right;
        }

        if(x != null){
            x.pai = y.pai;
        }

        if(y.pai == null){
            this.raiz = x;
        }else if(y == y.pai.left){
            y.pai.left = x;
        }else{
            y.pai.right = x;
        }

        if(y != z){
            z.key = y.key;
        }

        return y;
    }
}

module.exports = ArvoreBinaria;