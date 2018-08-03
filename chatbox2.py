# --- Define your functions below! ---
question1 = ['hi', 'hello', 'hi!', 'hello!', 'Hi!', 'Hello!', 'Hi', 'Hello', 'yo', 'Yo', 'yo!']

question2sleep = ['sleep', 'Sleep', 'sleep!', 'Sleep!']
question2eat = ['eat', 'Eat', 'eat!', 'Eat!']
question2wn = ['watch netflix', 'Watch Netflix', 'watch Netflix', 'watch netflix!', 'Watch Netflix!', 'watch Netflix!']
questionfdmc = ['mac and cheese', 'macaroni and cheese', 'Mac and Cheese', 'Macaroni and Cheese', 'Mac and cheese', 'Macaroni and cheese']
questiontvsl = ['sherlock', 'Sherlock', 'My favorite tv show is Sherlock', 'my favorite tv show is sherlock', 'my favorite tv show is Sherlock', 'My favortie tv show is sherlock', 'My favorite tv show is Sherlock.', 'My favorite TV show is Sherlock.']

def valid_responses(response, validans):

  if response in validans:
    return True
  return False



def intro():
  response = input("Hi! Emma here! I made this chatbox so you can learn a bit about me and I can learn a bit about you!")
  if valid_responses(response, question1):
    Name = input("(Hi! What is your name?) ")
    print("Hello,", (Name))
    instructions()

  else:
    Name = input("(What is your name?) ")
    print("Hello,", (Name))
    instructions()


def convo():
  response = input("(What is one of your favorite things to do?) ")
  if valid_responses(response, question2sleep):
    print("(Lol, same. I slept 13-14 hrs in a row before.)")

  else:
    if valid_responses(response, question2eat):
      response = input("(What is your favorite food?) ")
      if valid_responses(response, questionfdmc):
        print("(Mac and cheese is one of my favorite foods too.) ")

      else:
        print("(Yummy!) ")


    else:
      if valid_responses(response, question2wn):
        response = input("(What is your favorite TV show?) ")
        if valid_responses(response, questiontvsl):
          print("(SAMEEEEEEEE one of my favorite episodes is Sign of Three) ")


      else:
        print("(Cool!) ")


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
  print("(If you want to exit, just type bye.) ")

def bye():
  print("(Bye!)", (Name))

# --- Put your main program below! ---

def main():

  while True:

    intro()

    convo()

    instrument()





# DON'T TOUCH! Setup code that runs your main() function.

if __name__ == "__main__":

  main()
