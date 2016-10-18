import sys  
from PyQt4.QtGui import *  
from PyQt4.QtCore import *  
from PyQt4.QtWebKit import * 
from lxml import html 
import gameScraper as gs
import time 
import basketball as basketball


app = QApplication(sys.argv)

ids = gs.getGameIds(1415)

for id_item in ids:
	print('-----------------------------------------------------')
	print('Loading ' + id_item)
	game = gs.getGameStats(id_item)
	if game != "error":
		home_stats = game.getHomeStats()
		away_stats = game.getAwayStats()
		home_stats.write()
		away_stats.write()
		gs.setGameScore(id_item, game)
		game.write()
	#print(html)



app.exit()


'''
# ---- games ----
game = basketball.Game("yay", "yay2")
# ---- Scores ----
for i in range(0,4):
	tmp_id = gs.getGameIds(1415)[i]
	gs.setGameScore(tmp_id, game)
	game.write()
	time.sleep(10)

# game = basketball.Game("yay", "yay2")
# gs.setGameScore("1433001", game)
# game.write()



# ---- STATS ----

# game = gs.getGameStats("1433001")
# if game != "error":

# 	game.write()
# 	home_stats = game.getHomeStats()
# 	away_stats = game.getAwayStats()
# 	home_stats.write()
# 	away_stats.write()
# else:
# 	print(game)



# # playbyplay
# playByPl = 'file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#mbt:11-400$t&0=2'
# playPage = gs.getPageFromUrl(playByPl)
# gs.getPlayByPlay(playPage)





# playByPlay
#url ='http://basketliganherr.se/game/1054532/#stf'
# playByPlayUrl = 'file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#mbt:11-400$t&0=2'
# playbyplayPage = gs.getPageFromUrl(statsUrl)
# gs.getPlayByPlay(playbyplayPage, playByPlayUrl)
'''
