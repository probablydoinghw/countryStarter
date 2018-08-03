#Opens a file. You can now look at each line in the file individually with a statement like "for line in f:

# def intro():
#
#     print("Can your password survive a dictionary attack?")
#
# #Take input from the keyboard, storing in the variable test_password
# #NOTE - You will have to use .strip() to strip whitespace and newlines from the file and passwords
#     test_password = input("Type in a trial password: ")


def valid_responses(response, validans):
    if response in validans:
        return True
    return False

yes = ['yes', 'Yes', 'YES', 'YEs', 'YeS', 'yES', 'yeah', 'Yeah', 'YEAH', 'y', 'Y']

#Write logic to see if the password is in the dictionary file below here:
def start():
    file = open("dictionary.txt","r")
    test_password = input("Type in a trial password: ")
    for line in file:
        ts = test_password.strip()
        ts = ts.replace('$', 's')
        ts = ts.replace('4', 'a')
        ts = ts.replace('0', 'o')
        ts = ts.lower()
        # if len(ts) == 2:
        #     a, b = ts.split(' ')
        # or a == line.strip() or b == line.strip()
        if ts == line.strip():
            print("Your password was found! :(")
            response = input("Do you want to test another password?  ")
            if valid_responses(response, yes):
                start()
            else:
                print("Bye!")
                exit()



    print("Your password was not found. :)")
    response = input("Do you want to test another password?  ")
    if valid_responses(response, yes):
        start()
    else:
        print("Bye!")
        exit()


def main():
    start()




if __name__ == "__main__":

  main()
