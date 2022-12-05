const fs = require("fs");
const { consumers } = require("stream");

fs.readFile("L1Q3.in", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  let LE = []
  let LI = []

  input
    .split("\n")
    .forEach(line => {
      const keys = findKeys(line.split(" "))
      LE.push(keys.LE)
      LI.push(keys.LI)
    })

    // ordenando os LE com os seus LI
  let output = ''
  LE.forEach((line, index) => {
    output += '['
    line.forEach(number => {
      output += findSimilar(number, LI[index])
    })
    output = output.slice(0, -2) + ']\n'
  })

  createOutputFile(output.substring(0, output.length - 1));
});

const findKeys = (array) => {
  let auxLE = []
  let auxLI = []

  // varendo a entrada
  array.forEach(element => {
    if (!isNaN(element)) {
      // passando pelos pais e filhos e armazenando em cada variavel
      if (Number.isInteger(+element)) {
        auxLE.push(+element)
        return
      }
      auxLI.push(+element)
    }
  })

  return { LE: insertionSort(auxLE), LI: auxLI }
};

const findSimilar = (key, list) => {
  const similarNumbers = list.filter(el => el > key && el < (key + 1))
  const LI_Ordenada = insertionSort(similarNumbers)
  return `${key}(${LI_Ordenada.toString().replaceAll(',', '->')})->`
};

const createOutputFile = (output) => {
  fs.writeFile("L1Q3.out", output, (err) => {
    if (err) throw err;

    console.log("Arquivo criando!");
  });
};

// colocando os pais em ordem
const insertionSort = (array) => {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};