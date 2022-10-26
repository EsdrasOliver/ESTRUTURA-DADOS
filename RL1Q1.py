
def insertion_sort(A):
    for j in range(1, len(A)):
        key  =  A[j]
        i = j -1
        while(i > -1 and A[i] > key):
            A[i+1] = A[i]
            i = i - 1 
        A[i+1] = key


A = ['start', 3, -1, 2, 0, 'start', 4, 2, 5, 1, 0,'start', 2, 1, -3]
insertion_sort(A)
print(A)

