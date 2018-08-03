numberofguesses = 0

ourword = "word"

wrongletters = ['b', 'c', 'f', 'j', 'k', 'p', 'q', 'u', 'w', 'x', 'y', 'z']
print(wrongletters)


while numberofguesses <= 6:
    blankword = "_ _ _ _ _ _ _ _    _ _ _ _ _ _ _ _ _ _"
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


    playerchoice = input("Guess a letter!")


if playerchoice in wrongletters:
    numberofguesses -= 1
    print("That letter is not in the phrase!")
