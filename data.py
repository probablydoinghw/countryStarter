
import json
from textblob import TextBlob
import matplotlib.pyplot as plt
import numpy as np
`from wordcloud import WordCloud`

#Get the JSON data
tweetFile = open("data.json", "r")
tweetData = json.load(tweetFile)
tweetFile.close()

# Continue your program below!

polarity = []
subjectivity = []

for tweet in tweetData:
    print(tweet['text'])
    text = tweet['text']
    tb = TextBlob(text)
    polarity.append(tb.polarity)

    subjectivity.append(tb.subjectivity)
print(polarity)
avgp = sum(polarity)/len(polarity)
print(avgp)
print(subjectivity)
avgs = sum(subjectivity)/len(subjectivity)
print(avgs)

plt.hist(polarity)
#bin=[-1.1, -.75, -.50, -.25, 0.0, .25, .50, .75, 1.1]
plt.axis([-1, 1, 0, 60])
plt.xlabel('Polarity')
plt.ylabel('Number')
plt.title('Histogram of Tweet Polarity')
plt.grid(True)
plt.show()

plt.hist(subjectivity)
bin=[0.0, .25, .50, .75, 1.1]
plt.axis([-1, 1, 0, 60])
plt.xlabel('Subjectivity')
plt.ylabel('Number')
plt.title('Histogram of Tweet Subjectivity')
plt.grid(True)
plt.show()




# Textblob sample:
    #tb = TextBlob(data1)
    #print(tb.polarity)
