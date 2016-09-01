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
	page = ""
	page = html.fromstring(result)
	return page

def getBasicGameInfo(page):
	# teamNames
	teams_and_result = page.find_class('mbt-text')
	print("size of page: " + str(sys.getsizeof(teams_and_result)))
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
	

	stats_area = page.get_element_by_id('11-400-tab-container')
	stats = stats_area.find_class('mbt-table')
	print(stats)
	print(len(stats))
	if (len(stats) == 3):
		teams = [stats[0][0], stats[2][0]]

		for team in teams:
			row_list = []
			for player_cnt in range(2, len(team)):
				item_list = []
				for item_cnt in range(0, len(team[player_cnt])):
					value = str(team[player_cnt][item_cnt].text_content()).strip()
					if (item_cnt == 1):
						value = value[0:(len(value)-408)]
					item_list.append(value)
				row_list.append(item_list)
				item_list =""
			for i in row_list:
				print(i)



# RAD: 0 Nr 
# RAD: 1 Spelare 
# RAD: 2 Min 
# RAD: 3 2p S/F 
# RAD: 4 2p %
# RAD: 5 3p S/F 
# RAD: 6 3p %
# RAD: 7 1p S/F 
# RAD: 8 1p %
# RAD: 9 Rp off
# RAD: 10 Rp def
# RAD: 11 Rp tot
# RAD: 12 Ass
# RAD: 13 Foul gj. 
# RAD: 14 TO
# RAD: 15 Stl 
# RAD: 16 Blk
# RAD: 17 EFF 
# RAD: 18 +/- 
# RAD: 19 P 
	# for i in stats:
	# 	print("=============== " + str(i) + " =============")
	# 	print(i.text_content()[:300])
	#print(len(teams_and_result))
	
	# for i in listan:
	# 	print("=============== " + str(i) + " =============")
	# 	print(i.text_content())
	
	# =========== teamNames =========
	team_area = page.get_element_by_id('11-400')
	teams_and_result = team_area.find_class('mbt-text')
	teams_and_result = teams_and_result[0].text_content()
	teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
	end = int(teams_and_result.index('-'))
	homeName = teams_and_result[7:end]
	homeName = homeName.rstrip()
	awayName = teams_and_result[end+3:]

	# # #scores
	# quarters = page.find_class('mbt-gamecard-quarters')
	# homeQuarterScore = []
	# awayQuarterScore = []
	# homeScore = 0
	# awayScore = 0
	# for q in quarters[0]:
	# 	quarter = q.text_content()
	# 	dash = quarter.index('-')
	# 	homeQuarterScore.append(int(quarter[0:dash-1]))
	# 	awayQuarterScore.append(int(quarter[dash+2:]))
	# homeScore = sum(homeQuarterScore)
	# awayScore = sum(awayQuarterScore)

	game1 = game.Game(homeName, awayName)
	game1.setResult([68, 73], [[12, 14, 25, 17], [16, 20, 18, 19]])


	return game1
	# return ""

	# teamNames
	#print(page.text_content())

	# table = page.find_class('mbt-table mbt-complex')
	# statsList = table[0][0]
	# names = ["Nr","Spelare","Min","2p","3p","1p","R","Ass","F","TO","S","Blk","EFF","+/-","P","ett","två","tre","fyra","fem","sex","sju","åtta"]
	# cnt = 0;

	# for i in statsList:
	# #print("---" +str(len(i) + "----")
	# 	print("------- length: " + str(len(i)))
	# 	if (len(i) == 19):
	# 		break
	# 		for j in i:

	# 			print(names[cnt])
	# 			print(j.text_content().strip())
	# 			cnt = cnt + 1
	# 		cnt = 0;

	#print(table.text_content())
	'''

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
	print(table[0].text_content())
	#statsList = table[0][0]
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
