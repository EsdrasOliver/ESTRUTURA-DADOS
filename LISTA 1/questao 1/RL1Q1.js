
function ordenacao(a) {
    for(j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        // coloca os valores em ordem
        while(i > -1 && a[i] > key){
            a[i+1] = a[i]
            i = i - 1
            a[i+1] = key
        }
    }  
    return a
}

A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]
listaOrdenada = ordenacao(A)


function soma(a) {
    for(let j = 1; j < a.length; j++){
        key = a[j][-1]
        key2 = a[j]
        i = j - 1
        while(i >= 0 && a[i][-1] > key){
            a[i + 1] = a[i]
            i = i - 1
            a[j + 1] = key2
        }
    }
}

function outraSoma(a) {
    for(let j = 1; j < a.length; j++){
        key = a[j][-2]
        key2 = a[j]
        i = j - 1
        while(i >= 0 && a[i][-2] > key){
            a[i + 1] = a[i]
            i = i - 1
            a[j + 1] = key2
        }
    }
}


const fs = require("fs");
let lerArquivo = fs.readFileSync('L1Q1.in', 'utf-8');

leitura = lerArquivo.split(' ')

// remove os start 
entrada = []
for(let i = 0; i < leitura.length; i++){
    entrada.push(leitura[i].split('start '))
    delete(entrada[i][0])

    for(let j = 0; j < entrada[i]; j++){
        if(entrada[i][j][-1] === ' '){
            entrada[i][j] = entrada[i][j][-1]
        }
    }
}

// leitura = ''
listagem = listaOrdenada.map((_, indice) => indice).filter(i => listaOrdenada[i] === 'start');

outraListagem = []

for(lista in entrada){
    for(item in lista){
        outraListagem = (item.split(' '))
        listagem.push(outraListagem)

        leitura.push(listagem)
        // listagem.clear()
    }
}

for(let i=0; i < entrada.length; i++){
    for(let j=0; j < entrada[i]; j++){
        for(let x=0; x < entrada[i][j]; x++){
            entrada[i][j][x] = parseInt(entrada[i][j][x])
        }
    }
}

/*
for(let i=0; i < entrada.length; i++){
    for(let j=0; j < entrada[i].length; j++){
        k=0
        aux = {
            entrada: []
        }
        
        while(k < (aux.entrada[i][j].length - 1)){
            l = k+1
            while(l < entrada[i][j]){
                if(entrada[i][j][k] === entrada[i][j][l]){
                    entrada[i][j].pop(l)
                } else {
                    l+=1
                }
            k+=1
            }
        }
    }
}
*/

// (soma total no ultimo elemento e soma dos negativos no penultimo elemento)

for(let i=0; i < entrada.length; i++){
    for(let j=0; j < entrada; j++){
        somaC = 0
        outra_soma = 0
        for(item in entrada[i][j]){
            somaC += item
            if(item < 0){
                outra_soma += item 
            }
        }
        entrada[i][j].push(outra_soma)
        entrada[i][j].push(somaC)
    }
}

// ordenando as listas dentro da lista
for(let i=0; i < entrada.length; i++){
    for(let j=0; j < entrada[i].length; j++){
        // ordenando pela soma
        soma(entrada[i])

        // se tiver elemento negativo, ele faz a soma tbm
        if(entrada[i][j][-1] === entrada[i][j-1][-1] && j > 0){
            outraSoma(entrada[i])
        }
    }
}

for(let i=0; i < entrada.length; i++){
    for(let j=0; j < entrada[i].length; i++){
        entrada[i][j].pop(-1)
        entrada[i][j].pop(-1)
    }
}

// escrever no arquivo de saida
function imprimirLista(auxiliar) {
    var values = "";
    
    for (let x = 0; x < auxiliar.length; x++) {
        var i = auxiliar[x].toString()
        i = i.split(",").join(" ")
        if (x+1 != auxiliar.length) {
            i = i + "\n";
        }
        values += i;
    }
    return values
}

fs.writeFileSync("L1Q1.out", imprimirLista(listaOrdenada));

console.log("Arquivo criando!");