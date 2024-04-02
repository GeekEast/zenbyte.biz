# Hangman
- Jupyter Notebook

```python
from PIL import Image
from os import path
from random import choice
from time import sleep
```

```python
words = []
for line in open('dict.txt'):
    size = len(set(line))
    if size <= 7:
        words.append(line.strip())
word = choice(words)
placeholder = ["_"]*len(word)
```

```python
dh_img = display(display_id=True)
dh_img.display(Image.open('h1.png'))
dh_txt = display(display_id=True)
dh_txt.display("".join(placeholder))

file_id = 2
guess_right = 0
while path.exists(f"h{file_id}.png") == True:
    g_letter = input("Please guess a letter: ");
    is_right = False
    for i in range(0,len(word)):
        ch =  word[i]
        if g_letter == ch:
            placeholder[i] = ch
            is_right = True
    g_word = "".join(placeholder);
    dh_txt.update(g_word)
    
    if word == g_word:
        print("Guess Right!")
        guess_right = 1
        break
    
    if is_right == False:
        dh_img.update(Image.open(f"h{file_id}.png"))
        file_id += 1
        
if guess_right == 0:
    print("Guess Wrong!")
```