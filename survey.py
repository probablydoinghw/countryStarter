import json
allanswers = []

    # 'Question 1':'name',
    # 'Question 2':'music',
    # 'Question 3':'color'


# print(questions['Question 1'])

# name = {}
#
# name['1stName'] = input("What is your name?")
#
# print(name['1stName'])
#
# music = {}
#
# music['1stFood'] = input("What is your favorite food?")
#
# color = {}
#
# color['1stAge'] = input("What is your favorite color?")

# userList = ["Emma", "Sueda", "Saumya"]

# go through
print("Type Done, when you are done; type Enter to continue.")


while input() != "Done":
        answers = {}

        answers['name'] = input("What is your name?  ")

        answers['color'] = input("What is your favorite color?  ")

        answers['music'] = input("What is your favorite song?  ")

        allanswers.append(answers)

        dictionarytoJson = json.dumps(answers)

# print(dictionarytoJson)

with open("allanswers.json","w") as outfile:
    json.dump(allanswers, outfile)
