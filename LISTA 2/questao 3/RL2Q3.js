
const Arvore = require("../ArvoreBinaria")
const No = require("../No")
const fs = require('fs')

var arvoreQ3 = fs.readFileSync('./L2Q3.in', 'utf-8')
var entrada = arvoreQ3.split(/\r?\n/)

for(let i=0; i < entrada.length; i++) {
    entrada[i] = entrada[i].split(' ')
}

for(let i = 0; i < entrada.length; i++) {
    for(let j = 0; j < entrada[i].length; j++) {
        j++
        entrada[i][j] = Number(entrada[i][j])
    }
}

var saida = ''

for(let i = 0; i < entrada.length; i++) {
    var arvoreBinaria = new Arvore()

    for(let j = 0; j < entrada[i].length; j++) {
        // adicao
        if(entrada[i][j] == 'a') {
            j++
            arvoreBinaria.Insert(new No(entrada[i][j]))
        } else if(entrada[i][j] == 'r') {
            j++
            let auxProcura = arvoreBinaria.Procurar(arvoreBinaria.raiz, entrada[i][j])

            if(auxProcura == null) {
                arvoreBinaria.Insert(new No(entrada[i][j]))
            } else {
                arvoreBinaria.Delete(auxProcura)
            }
        }
    }

    var array = arvoreBinaria.VerificarArray(arvoreBinaria.raiz)

    for(j = 0; j < array.length; j++) {
        saida += `${array[j].key} (${array[j].pegarAlt()}) ${j == array.length - 1 ? '' : ' '}`
    }

    saida += '\n'
}

fs.writeFileSync("L2Q3.out", saida.substring(0, saida.length - 1))

