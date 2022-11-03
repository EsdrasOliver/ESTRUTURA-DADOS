strings = []
numeros = []

def ordenacao(A):   
    
    for j in range(1, len(A)):
        key = A[j]
        i = j -1
        if key == 'start':
            pass
        if key != 'start':
            numeros.append(key)
        # while(i > -1 and A[i] > key):
        #     A[i+1] = A[i]
        #     i = i - 1 
        # A[i+1] = key

    #     for i in range(n-1):
    #         if lista[i] > lista[i+1]:
    #             lista[i], lista[i+1] = lista[i+1], lista[i]
    print(numeros)

A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0, 'start', 2, 1, -3] 
ordenacao(A)


# file = open('RL1Q1.in', 'r')
# lines = file.readlines()  

# # with open('RL1Q1.out', 'w') as arquivo:
# #     for l in lines:
# #         arquivo.write(Number(l))
