# # prints hello world
# print("Hello, World!")
# value = True
# anotherValue = False
# yetanotherValue = True
# print("& ", value & anotherValue)
# print("^ ", value ^ anotherValue)
# print("== ", value == yetAnotherValue)
# i = -1
# while True:
#     i += 1
#
#     if(i > 20):
#         break
#
#     # i is odd
#     if(i % 2 != 0):
#         continue
#
#     print(i)
#imports the ability to get a random number (we will learn more about this later!)

NumberofGuesses = 0

while NumberofGuesses <= 3:

    from random import *

    aRandomNumber = randint(1, 20)

#Generates a random integer.

# For Testing: print(aRandomNumber)

    guess = input("Guess a number between 1 and 20 (inclusive): ")

    if not guess.isnumeric(): # checks if a string is only digits 0 to 9

	   print("That's not a positive whole number, try again!")
       continue

else:

	guess = int(guess) # converts a string to an integer


    if guess == aRandomNumber:
        print("You got it right!")

    if guess > aRandomNumber:
        print("Go lower!")

    if guess < aRandomNumber:
        print("Go higher!")

        NumberofGuesses += 1
