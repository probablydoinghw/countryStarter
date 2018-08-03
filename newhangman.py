from random import *

#make a letter banks/guesses
ChosenLetters = []

#make array of words
Words = ["elephant", "jackolantern", "catastrophe"]

#choose random word
randomize = randint(0, len(Words)-1)

WordPick = Words[randomize]

#return visual of word in dashes
visual = []

for i in WordPick:
     visual.append("-")

#set a number of tries
while len(ChosenLetters) < 6:
    #replace dashes with guess at all places
  guess = input("PLEASE GUESS A LETTER!")
  if(str(guess)in WordPick):
  #if already chose that letter say
    if(str(guess) in visual):
      print("YOU ALREADY GUESSED THAT, SILLY. PLEASE GUESS AGAIN")
    else:
      i = 0
      for x in WordPick:
        if(x == guess):
          visual[i] = str(guess)
          i+=1
        else:
          i+=1
      print("GOOD JOB!", ''.join(map(str,visual)))

  else:
  #if already chose that letter say
    if(str(guess) in ChosenLetters):
      print("HEY DUMBY - YOU TRIED THAT AND IT'S WRONNNGGG")
    else:
      ChosenLetters.append(str(guess))
    print(ChosenLetters)
  #if guess is incorrect, & # of guesses
    if(len(ChosenLetters) < 6):
      print("NOPE! GUESS AGAIN SLICK. YOU HAVE %s GUESSES LEFT" % (6 - len(ChosenLetters)))
#if we lose say
print("========= YOU LOSE! HANGMAN =========")
