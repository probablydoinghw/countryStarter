# --- Define your functions below! ---
def intro():
  response = input("Hi! Emma here! I made this chatbox so you can learn a bit about me and I can learn a bit about you!")

  if response == "hi":
    Name = input("(Hi! What is your name?) ")
    print("Hello,", (Name))
    instructions()

  else:
    Name = input("(What is your name?) ")
    print("Hello,", (Name))
    instructions()

def convo():
  answer = input("(What is your favorite color?) ")

  print("Yeah!", (answer), "is a nice color! My favorite colors are rosy pink and gold.")

  answer = input("(Do you play any sports?) ")
  print(("Lol cool! I did ballet for about 4 years."))

  if input == "yes":
    answer = input("(What sport do you play?) ")
    print(("Nice!"))

  else:
    answer = input("(What do you do for extracurriculars?) ")
    print("(Cool! Okay, I'm going to stop saying cool now lol.) ")

def instrument():
  answer = input("(Do you play an instrument?) ")
  if answer == "yes":
    answer = input("(What instument do you play?) ")
    parameter(answer)

  else:
    print("(Nice!) ")

def parameter(answer):
  print((answer),"is a cool instrument. I played violin for about 4-5 years." )

def instructions():
  print("(If you want to exit, just type exit.) ")



def bye():
  print("(Bye!", (Name))



# --- Put your main program below! ---

def main():

  while True:

    intro()

    answer = input("(What is one of your favorite things to do?) ")

    print("That's cool!")

    convo()

    instrument()





# DON'T TOUCH! Setup code that runs your main() function.

if __name__ == "__main__":

  main()
