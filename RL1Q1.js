function insertion_sort(a) {
    //ordenar os valores
    for (j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        while(i > -1 && a[i] > key){
            a[i+1] = a[i]
            i = i - 1
            a[i+1] = key
        }
    }
    
    //faz a soma 
    soma = 0
    somas = []
    fim = []
    for (j = 1; j < a.length; j++){
        key = a[j]
        i = j - 1
        soma += key
        
    }  
}

A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]

insertion_sort(A)
