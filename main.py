import sys  
from PyQt4.QtGui import *  
from PyQt4.QtCore import *  
from PyQt4.QtWebKit import * 
from lxml import html 
import dataHandler as dataHandler

#Take this class for granted.Just use result of rendering.
class Render(QWebPage):  
  def __init__(self, url):  
    self.app = QApplication(sys.argv)  
    QWebPage.__init__(self)  
    self.loadFinished.connect(self._loadFinished)  
    self.mainFrame().load(QUrl(url))  
    self.app.exec_()  
  
  def _loadFinished(self, result):  
    self.frame = self.mainFrame()  
    self.app.quit()  

# matchinfo
url = 'file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#stf'
# sammanställning
#url = 'file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#mbt:11-400$t&0=1'  
# BASE INFO
r = Render(url)  
result = r.frame.toHtml()
page = html.fromstring(result)

dataHandler.handleData(page)

''' STATS
table = page.find_class('mbt-table mbt-complex')
statsList = table[0][0]
names = ["Nr","Spelare","Min","2p","3p","1p","R","Ass","F","TO","S","Blk","EFF","+/-","P","ett","två","tre","fyra","fem","sex","sju","åtta"]
cnt = 0;


for i in statsList:
	#print("---" +str(len(i) + "----")
	print("------- length: " + str(len(i)))
	if (len(i) == 19):
		break
	for j in i:

		print(names[cnt])
		print(j.text_content().strip())
		cnt = cnt + 1
	

	cnt = 0

'''



#print(table[0].text_content())


'''
url = 'file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#stf'  
# BASE INFO
r = Render(url)  
result = r.frame.toHtml()
page = html.fromstring(result)

# teams and result
teams_and_result = page.find_class('mbt-text')
print(teams_and_result[1].text_content())

quarters = page.find_class('mbt-gamecard-quarters')
for q in quarters[0]:
	print(q.text_content())
'''