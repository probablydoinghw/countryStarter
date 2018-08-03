import school_scores
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt; plt.rcdefaults()
import numpy as np
list_of_record = school_scores.get_all()

tex=[]
other=[]
allyeartex=[]
allyearother=[]

for score in list_of_record:

    if score['State']['Code'] == "TX":
        totaltx = score['Total']['Math'] + score['Total']['Verbal']
        tex.append(totaltx)

        avgtx = sum(tex)/len(tex)

        yeartex = score['Year']
        allyeartex.append(yeartex)

    else:
        totalother = score['Total']['Math'] + score['Total']['Verbal']
        other.append(totalother)

        avgother = sum(other)/len(other)

        yearother = score['Year']
        allyearother.append(yearother)

print("Average SAT Score for Texas: ", (avgtx))
print("Average SAT Score for All States Not Including Texas: ", (avgother))



objects = ('2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015')
y_pos = np.arange(len(objects))
performance = [1000,990,980,970,960,950,940]

plt.bar(allyeartex, tex, align='center', alpha=0.5)
# plt.xticks(y_pos, objects)
plt.ylabel('SAT Score')
plt.title('Year')
plt.show()

objects = ('2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015')
y_pos = np.arange(len(objects))
performance = [1600,1500,1400,1300,1200,1100,1000,900,800,700,600,500,400,300,200,100]

plt.bar(allyearother, other, align='center', alpha=0.5)
# plt.xticks(y_pos, objects)
plt.ylabel('SAT Score')
plt.title('Year')

plt.show()

plt.hist(hist(x, bins=[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015] range=None, density=None, weights=None, cumulative=False, bottom=None, histtype='bar', align='mid', orientation='vertical', rwidth=None, log=False, color=None, label=None, stacked=False, normed=None, *, data=None, patches= (allyeartex,tex) **kwargs)
# plt.axis([2000, 2015, 940, 1000])
plt.xlabel('Year')
plt.ylabel('Scores')
plt.title('Texas SAT Scores')
plt.grid(True)
plt.show()

# tex1 = plt.plot(allyeartex, tex, label=Texas)
# other1 = plt.plot(allyearother, other, label=All Other States)
# plt.xlabel('Year')
# plt.ylabel('Scores')
# plt.title('SAT Scores')
# plt.show()

plt.hist(allyearother, other)
plt.axis([2000, 2015, 400, 1600])
plt.xlabel('Year')
plt.ylabel('Scores')
plt.title('SAT Scores of States Other Than Texas')
plt.grid(True)
plt.show()

# plt.plot(other)
# plt.xlabel('Year')
# plt.ylabel('Scores')
# plt.title('SAT Scores of States Other Than Texas')
# plt.show()
