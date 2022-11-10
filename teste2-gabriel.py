class Stack():

    def __init__(self, size):
        self.top = -1
        self.S = [0] * size


    def stack_empty(self):
        if self.top == -1:
            return True
        else:
            return False


    def stack_full(self):
        if self.top == len(self.S) - 1:
            return True
        else:
            return False


    def push(self, x):
        if not self.stack_full():
            self.top += 1
            self.S[self.top] = x
        else:
            print('ERRO - Pilha cheia')


    def pop(self):
        if not self.stack_empty():
            self.top += -1
            return self.S[self.top + 1]
        else:
            print('ERRO - Pilha vazia')


    def print(self):
        for i in range(self.top, -1, -1):
            print(self.S[i],  end=" ")

    def topo(self):
        i = self.top
        return self.S[i]



# Ler arquivo inteiro
file = open('L1Q2.in', encoding='utf-8')
entrada = file.read()




# Separar cada linha num elemento da lista entrada_aux
entrada = entrada.split('\n')
entrada_aux = []
for linha in entrada:
    nome = linha.split(' ')
    entrada_aux.append(nome)


entrada = entrada_aux.copy()
entrada_aux.clear()

saida_local = ''
saida = []
pop_rep = []

for i in range(len(entrada)):
    saida_local += '\n'
    pilha = Stack(10000)  # Armazenar os nomes ordenados
    pilha_aux = Stack(9999)  # Armazenar os nomes deletados no pop()

    for j in range(len(entrada[i])):

        # adicionar o primeiro nome na pilha
        if pilha.stack_empty():
            pilha.push(entrada[i][j])
            saida_local += 'push-'
            saida_local += entrada[i][j] + ' '

        # adicionar nome sem precisar usar o pop()
        elif entrada[i][j] > entrada[i][j - 1]:
            pilha.push(entrada[i][j])
            saida_local += 'push-'
            saida_local += entrada[i][j] + ' '

        # adicionar nome que precisa do pop()
        else:
            k = j - 1
            num_pop = 0
            num_popR = 0
            while k >= 0:
                # adicionar o nome no lugar certo
                if entrada[i][j] >= pilha.topo():
                    pilha.push(entrada[i][j])
                    saida_local += 'push-'
                    saida_local += entrada[i][j] + ' '
                    for l in range(num_pop):
                        m = pilha_aux.pop()
                        pilha.push(m)
                        saida_local += 'push-'
                        saida_local += m + ' '
                        num_pop = 0

                # remover os nomes no caminho
                elif entrada[i][j] < entrada[i][k]:
                    m = pilha.pop()
                    num_pop += 1
                    pilha_aux.push(m)
                    saida_local += 'pop-'
                    saida_local += str(num_pop) + 'x '

                    # adicionar numero no primeiro elemento
                    if k == 0:
                        pilha.push(entrada[i][j])
                        saida_local += 'push-'
                        saida_local += entrada[i][j] + ' '
                        for l in range(num_pop):
                            m = pilha_aux.pop()
                            pilha.push(m)
                            saida_local += 'push-'
                            saida_local += m + ' '

                k += -1


# separar linhas
tratamento = saida_local.split('\n')
tratamento.pop(0)


# remover espaço em branco no final de cada linha
for i in range(len(tratamento)):
     tratamento[i] = tratamento[i][:-1]


# separar cada elemento dentro das linhas
for i in range(len(tratamento)):
    tratamento[i] = tratamento[i].split(' ')


# procurar e remover 'pop-nx' repetidos
for linha in tratamento:
    local_pop = []
    for i in range(len(linha)):
        item = linha[i]
        if item[0:3] == 'pop':
            if linha[i-1][0:3] == 'pop':
                local_pop.append(i-1)
    num_x = 0
    for coord in range(len(local_pop)):
        linha.pop(local_pop[coord] - num_x)
        num_x += 1

# escrever a saída
with open('L1Q2.out', 'w') as f:
    for linha in tratamento:
        str_linha = ''
        for item in linha:
            str_linha += ' ' + str(item)

        # remover espaço em branco no começo de cada linha
        str_linha = str_linha[1:]

        f.write("%s\n" % str_linha)

