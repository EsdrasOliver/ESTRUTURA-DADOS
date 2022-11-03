from node import Node

class Pilha:
    def __init__(self):
        self.top = None
        self._size = 0

    def push(self, e):
        node = Node(e)
        node.next = node
        self.top = node
        self._size = self._size + 1

    def pop(self):
        if self._size > 0:
            node = self.top
            self.top = self.top.next
            self._size = self._size - 1
            return node

    def peek(self):
        if self._size > 0:
            return self.top


file = open('RL1Q2.in', 'r')
lines = file.readline()
for l in lines:
    l = Pilha()