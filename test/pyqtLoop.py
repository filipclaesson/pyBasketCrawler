from PyQt4 import QtCore
from PyQt4 import QtGui
from PyQt4 import QtWebKit
import sys

def loadPage(url):
      page = QtWebKit.QWebPage()
      loop = QtCore.QEventLoop() # Create event loop
      page.mainFrame().loadFinished.connect(loop.quit) # Connect loadFinished to loop quit
      page.mainFrame().load(QtCore.QUrl(url))
      loop.exec_() # Run event loop, it will end on loadFinished
      return page.mainFrame().toHtml()

app = QtGui.QApplication(sys.argv)

urls = ['https://google.com', 'http://reddit.com', 'http://wikipedia.org']

for url in urls:
      print('-----------------------------------------------------')
      print('Loading ' + url)
      html = loadPage(url)
      
      print(html)

app.exit()