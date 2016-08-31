import sys  
from PyQt4.QtGui import *  
from PyQt4.QtCore import *  
from PyQt4.QtWebKit import * 
from lxml import html 
import game as game

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

def getPageFromUrl(url):
	r = Render(url)
	result = r.frame.toHtml()
	page = html.fromstring(result)
	return page

def getBasicGameInfo(page):
	# teamNames
	teams_and_result = page.find_class('mbt-text')
	teams_and_result = teams_and_result[1].text_content()
	teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
	end = int(teams_and_result.index('-'))
	homeName = teams_and_result[7:end]
	homeName = homeName.rstrip()
	awayName = teams_and_result[end+3:]

	#scores
	quarters = page.find_class('mbt-gamecard-quarters')
	homeQuarterScore = []
	awayQuarterScore = []
	homeScore = 0
	awayScore = 0
	for q in quarters[0]:
		quarter = q.text_content()
		dash = quarter.index('-')
		homeQuarterScore.append(int(quarter[0:dash-1]))
		awayQuarterScore.append(int(quarter[dash+2:]))
	homeScore = sum(homeQuarterScore)
	awayScore = sum(awayQuarterScore)

	game1 = game.Game(homeName, awayName)
	game1.setResult([homeScore, awayScore], [homeQuarterScore, awayQuarterScore])


	#game1.write()
	return game1

def getGameStats(page):
	# teamNames
	teams_and_result = page.find_class('mbt-text')
	teams_and_result = teams_and_result[1].text_content()
	teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
	end = int(teams_and_result.index('-'))
	homeName = teams_and_result[7:end]
	homeName = homeName.rstrip()
	awayName = teams_and_result[end+3:]

	#scores
	quarters = page.find_class('mbt-gamecard-quarters')
	homeQuarterScore = []
	awayQuarterScore = []
	homeScore = 0
	awayScore = 0
	for q in quarters[0]:
		quarter = q.text_content()
		dash = quarter.index('-')
		homeQuarterScore.append(int(quarter[0:dash-1]))
		awayQuarterScore.append(int(quarter[dash+2:]))
	homeScore = sum(homeQuarterScore)
	awayScore = sum(awayQuarterScore)

	game1 = game.Game(homeName, awayName)
	game1.setResult([homeScore, awayScore], [homeQuarterScore, awayQuarterScore])


	#game1.write()
	return game1
