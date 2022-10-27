function insertion_sort(a) {
    
    numeros = []

    for (j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1

        console.log('valor: ', key,' indice: ', i);
        // soma os valores e coloca em ordem para a maior soma 
        if(key !== 'start'){
            numeros[i] = key
        } 
        if(key === 'start' || j === a.length){
            fim = i
            numeros[fim] = i
            ordenarSomas(numeros, fim)  
        }

        /*
        // coloca os valores em ordem
        while(i > -1 && a[i] > key){
            a[i+1] = a[i]
            i = i - 1
            a[i+1] = key
        }
        */
    }
}


function ordenarSomas(n, f){
    console.log('entrou');
    soma = 0
    console.log('n: ',n,'f',f);
    for(let c=0 ; c<f ; c++){
        soma += n[c]
    }
    console.log('soma',soma);
}


A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]

insertion_sort(A)
