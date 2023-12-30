loop = int(input(''))
list_word = []
for i in range (loop):
    valable = input('{}'.format(i+1))
    list_word.append(valable)

for word in list_word:
    print('{}'.format(word, len(word)))