function insertion_sort(a) {
    
    numeros = []
    soma = 0
    
    for (j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1

        console.log('valor: ', key,' indice: ', i);
        // soma os valores e coloca em ordem para a maior soma 
        if(key !== 'start'){
            numeros[i] = key
            soma += numeros[i]
        } 
        if(key === 'start' || j === a.length){
            fim = i
            numeros[fim] = soma
            
            for(let c=0;c<=fim;c++){
                console.log('numeros:',numeros[c])
            }
            console.log('soma',soma);
            
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


A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]

insertion_sort(A)
