
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


function ordenandoSoma(l){
    
    s = 0
    soma = 0
    somas = []
    indexStart = []

    for(j = 1; j < l.length; j++){
        key = l[j]
        i = j - 1
        while(i > -1 && l[i] > key){
            console.log('i', i,'key',key)
            i = i - 1
        }

        // console.log('valor',key,'indice',i)

        // if(key !== 'start'){
            //     soma += key
            // }
            // if(key === 'start'){
            //     indexStart[i] = i
            //     s+=1
            //     somas[s] = soma
            //     soma = 0
            // }
    }  
}

A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]
lista = ordenacao(A)

// ordenando por somas de cada array
ordenandoSoma(lista)
