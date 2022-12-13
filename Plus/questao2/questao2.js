const Arvore = require("../ArvoreBinaria")
const No = require("../No")
const fs = require('fs')



var arvoreQ2 = fs.readFileSync('./L2Q2.in', 'utf-8')

var input = arvoreQ2.split(/\r?\n/)

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ')
}

for(let i=0; i<input.length; i++) {
    for(let j=0; j<input[i].length; j++) {
        input[i][j] = Number(input[i][j])
    }
}


var output = ""

for(let i=0; i<input.length; i++) {
    var arvoreBinaria = new Arvore()

    for(let j=0; j<input[i].length; j++) {
        if(arvoreBinaria.search(arvoreBinaria.raiz, input[i][j]) == null)
            arvoreBinaria.InsertNode(new No(input[i][j]))
    }

    let arrayTree = arvoreBinaria.VerificarArray(arvoreBinaria.raiz)

    for(let j=0; j<arrayTree.length; j++) {
        var right = arvoreBinaria.SomarFolhas(arrayTree[j].right);
        var left = arvoreBinaria.SomarFolhas(arrayTree[j].left);

        output += `${arrayTree[j].key} (${right - left})${j === arrayTree.length - 1 ? '' : ' '}`;
    }
    output += "\n"
}

fs.writeFileSync("L2Q2.out", output.substring(0, output.length - 1));
console.log("Procure pelo arquivo L2Q2.out")
