# Rename this file to be "filters.py"

# Add commands to import modules here.
from PIL import Image


# Define your load_img() function here.

#       Parameters: The name of the file to be opened (string)

#       Returns: The image object with the opened file.

def load_img(filename):
    img = Image.open(filename)
    return img



# Define your show_img() function here.

#       Parameters: The image object to display.

#       Returns: nothing.

def show_img(img):
    img.show()





# Define your save_img() function here.

#       Parameters: The image object to save, the name to save the file as (string)

#       Returns: nothing.

def save_img(img,filename):
    img.save(filename, "jpeg")
    show_img(img)





# Define your obamicon() function here.

#       Parameters: The image object to apply the filter to.

#       Returns: A New Image object with the filter applied.

def obamicon(img):
    # Loading all the pixels
    pixels = img.getdata()

    # Creat a list to hold the new image pixel data
    new_pixels = []

    darkBlue = (0, 51, 76)
    red = (217, 26, 33)
    lightBlue = (112, 150, 158)
    yellow = (252, 227, 166)

    #Process the pixels in the Image
    for p in pixels:
        #Find the pixel intensity
        intensity = p[0] + p[1] + p[2]

        if intensity < 182:
            new_pixels.append(darkBlue)
        elif intensity >= 182 and intensity < 364:
            new_pixels.append(red)
        elif intensity >= 364 and intensity < 546:
            new_pixels.append(lightBlue)
        elif intensity >= 546:
            new_pixels.append(yellow)
    # Save the filtered pixels as a new Image
    new_img = Image.new("RGB", img.size)
    new_img.putdata(new_pixels)
    return new_img


    # Define your new filters
def my_filter(img):
    thepixels = img.getdata()

    new_pixels = []


    lightpink = (255, 204, 204)
    pink = (255, 153, 153)
    darkerpink = (255, 102, 102)
    lightyellow = (255, 255, 102)

    #Process the pixels in the Image
    for p in thepixels:
    #Find the pixel intensity
        intensity = p[0] + p[1] + p[2]

        if intensity < 182:
            new_pixels.append(darkerpink)
        elif intensity >= 182 and intensity < 364:
            new_pixels.append(pink)
        elif intensity >= 364 and intensity < 546:
            new_pixels.append(lightpink)
        elif intensity >= 546:
            new_pixels.append(lightyellow)
# Save the filtered pixels as a new Image
    new_img = Image.new("RGB", img.size)
    new_img.putdata(new_pixels)
    return new_img

def my_filter2(img):
    thepixels = img.getdata()

    new_pixels = []


    darkerpurple = (102, 0, 204)
    lightpurple = (178, 102, 255)
    lightyellow = (255, 255, 102)
    yellow = (255, 255, 0)

    #Process the pixels in the Image
    for p in thepixels:
    #Find the pixel intensity
        intensity = p[0] + p[1] + p[2]

        if intensity < 182:
            new_pixels.append(darkerpurple)
        elif intensity >= 182 and intensity < 364:
            new_pixels.append(lightyellow)
        elif intensity >= 364 and intensity < 546:
            new_pixels.append(lightpurple)
        elif intensity >= 546:
            new_pixels.append(yellow)
# Save the filtered pixels as a new Image
    new_img = Image.new("RGB", img.size)
    new_img.putdata(new_pixels)
    return new_img
