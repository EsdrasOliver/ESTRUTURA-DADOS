const Arvore = require("../ArvoreBinaria")
const No = require("../No")
const fs = require('fs')


var arvoreQ3 = fs.readFileSync('./L2Q3.in', 'utf-8')

var input = arvoreQ3.split(/\r?\n/)

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ')
}

for(let i=0; i<input.length; i++) {
    for(let j=0; j<input[i].length; j++) {
        j++
        input[i][j] = Number(input[i][j])
    }
}



var output = ""

for(let i=0; i<input.length; i++) {
    var arvoreBinaria = new Arvore()

    for(let j=0; j<input[i].length; j++) {
        if(input[i][j] == 'a') {
            j++
            arvoreBinaria.InsertNode(new No(input[i][j]))
        }
        else if(input[i][j] == 'r') {
            j++
            let auxSearch = arvoreBinaria.search(arvoreBinaria.raiz, input[i][j])

            if(auxSearch == null)
                arvoreBinaria.InsertNode(new No(input[i][j]))
            else
                arvoreBinaria.Delete(auxSearch)
        }
    }

    let arrayTree = arvoreBinaria.VerificarArray(arvoreBinaria.raiz);

    for(j = 0; j < arrayTree.length; j++){
        output += `${arrayTree[j].key} (${arrayTree[j].getAlt()})${j === arrayTree.length - 1 ? '' : ' '}`;
    }

    output += "\n";
}

fs.writeFileSync("L2Q3.out", output.substring(0, output.length - 1));
console.log("Procure pelo arquivo L2Q3.out")
