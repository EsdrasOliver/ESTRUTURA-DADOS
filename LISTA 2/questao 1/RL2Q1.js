
// simplifiquei a arvore e o no 
const Arvore = require('../ArvoreBinaria')
const No = require('../No')

const fs = require('fs')

// lendo arquivo
var arvoreQ1 = fs.readFileSync('./L2Q1.in', 'utf-8')
var entrada = arvoreQ1.split(/\r?\n/)

for(let i = 0; i < entrada.length; i++) {
    entrada[i] = entrada[i].split(' ')
}

for(let i = 0; i < entrada.length; i++) {
    for(let j = 0; j < entrada[i].length; j++) {
        entrada[i][j] = Number(entrada[i][j])
    }
}

var saida = ''

for(let i = 0; i < entrada.length; i++) {
    var arvoreBinaria = new Arvore()

    for(let j = 0; j < entrada[i].length; j++) {
        let altura = arvoreBinaria.Insert(new No(entrada[i][j]))
        saida += `${altura} `
    }

    // SearchMax
    var maximo = arvoreBinaria.ProcurarMax(arvoreBinaria.raiz)

    // getAlt
    // SearchAnt
    saida+= `max ${maximo.key} alt ${maximo.pegarAlt()} pred ${(maximo.pai != null) ? arvoreBinaria.ProcurarAnt(maximo).key : "NaN"}\n`
}

fs.writeFileSync("L2Q1.out", saida.substring(0, saida.length - 1));
