
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
listaOrdenadaCrescente = ordenacao(A)

// somar os arrays e coloca em ordem por soma
let Valores = [];
let listaOrdenada = [];

for (let x = 0; x < Valores.length; x++) {
    for (y = 0; y < Valores[x].length; y++) {
        ordenarListas(Valores[x][y]);
    }
}

let adicionar = [];

function somarValores(Valores, adicionar) {
    for (let x = 0; x < Valores.length; x++) {
        let auxiliar = [];
        for (let y = 0; y < Valores[x].length; y++) {
            let i = 0;
    
            for (let z = 1; z < Valores[x][y].length; z++) {
                if (Valores[x][y][z] > 0){
                    i += parseInt(Valores[x][y][z])
                }
            }    
            auxiliar.push({i, x, y});
        }
        adicionar.push(auxiliar);
    }

    let quantidade = [];
    for (let x = 0; x < adicionar.length; x++) {
        let armazenar = [];
        let auxiliar2 = [];

        for (let y = 0; y < adicionar[x].length; y++) {
            for (let z = 0; z < armazenar.length; z++) {
                if (armazenar[z].i == adicionar[x][y].i) {
                    if (!auxiliar2.includes(adicionar[x][y])) {
                        auxiliar2.push(adicionar[x][y]);
                    }
                    if (!auxiliar2.includes(armazenar[z])) {
                        auxiliar2.push(armazenar[z]);
                    }
                }
            }
            armazenar.push(adicionar[x][y]);
        }
        quantidade.push(auxiliar2);
    }

    for (let x = 0; x < quantidade.length; x++) {
        for (let y = 0; y < quantidade[x].length; y++) {
            for (let z = 1; z < Valores[quantidade[x][y].x][quantidade[x][y].y].length; z++) {
                if (Valores[quantidade[x][y].x][quantidade[x][y].y][z] < 0) {
                    quantidade[x][y].i = quantidade[x][y].i + parseInt(Valores[quantidade[x][y].x][quantidade[x][y].y][z]);
                }
            }
        }
    }
}

somarValores(Valores, adicionar);

function ordenarSomas(ordenar) {
    let i = ordenar.length;

    for (let x = 1; x < i; x++) {
        let auxiliar = ordenar[x];
        let y = x - 1; 
        while ((y > -1) && (auxiliar.soma < ordenar[y].soma)) {
            ordenar[y + 1] = ordenar[y];
            y--;
        }
        ordenar[y + 1] = auxiliar;
    }
}


for (let x = 0; x < adicionar.length; x++) {
    ordenarSomas(adicionar[x]);
}

for (let x = 0; x < adicionar.length; x++) {
    let i = [];
    for (let y = 0; y < adicionar[x].length; y++) {
        i.push(Valores[adicionar[x][y].x][adicionar[x][y].y]);
    }
    listaOrdenada.push(i);
}
