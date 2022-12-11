
const Arvore = require('../ArvoreBinaria')
const No = require('../No')

const fs = require('fs')

var arvoreQ2 = fs.readFileSync('./L2Q2.in', 'utf-8')
var entrada = arvoreQ2.split(/\r?\n/)

for(let i = 0; i < entrada.length; i++) {
    entrada[i] = entrada[i].split(' ')
}

for(let i = 0; i < entrada.length; i++) {
    for(let j=0; j < entrada[i].length; j++) {
        entrada[i][j] = Number(entrada[i][j])
    }
}

var saida = ''

for(let i = 0; i < entrada.length; i++) {
    var arvoreBinaria = new Arvore()

    for(let j = 0; j < entrada[i].length; j++) {
        if(arvoreBinaria.Procurar(arvoreBinaria.raiz, entrada[i][j]) == null) {
            arvoreBinaria.Insert(new No(entrada[i][j]))
        }
    }

    let arrayTree = arvoreBinaria.VerificarArray(arvoreBinaria.raiz)

    for(let j = 0; j < arrayTree.length; j++) {
        var direita = arvoreBinaria.Soma(arrayTree[j].direita);
        var esquerda = arvoreBinaria.Soma(arrayTree[j].esquerda);

        saida += `${arrayTree[j].key} (${direita - esquerda})${j === arrayTree.length - 1 ? '' : ' '}`
    }
    saida += "\n"
}

fs.writeFileSync("L2Q2.out", saida.substring(0, saida.length - 1))
