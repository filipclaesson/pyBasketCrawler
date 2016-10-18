import sys  
from PyQt4.QtCore import *
from PyQt4.QtGui import *
from PyQt4.QtWebKit import *
from PyQt4 import QtCore
from lxml import html 
import basketball as basketball


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

def loadPage(url):
      page = QWebPage()
      loop = QEventLoop() # Create event loop
      page.mainFrame().loadFinished.connect(loop.quit) # Connect loadFinished to loop quit
      page.mainFrame().load(QUrl(url))
      loop.exec_() # Run event loop, it will end on loadFinished
      return page.mainFrame().toHtml()

def getGameIds(year):
	gameids1516 = ['2274397','2274405','2274409','2274413','2274417','2274385','2274377','2274381','2274393','2274389','2274353','2274357','2274361','2274365','2274369','2274245','2274325','2274329','2274333','2274341','2274345','2274181','2274317','2274321','2274309','2274313','2274277','2274281','2274285','2274289','2274293','2274257','2274273','2274253','2274265','2274237','2274233','2274249','2274241','2274269','2274193','2274037','2274205','2274213','2274217','2274221','2274225','2274185','2274189','2274197','2274157','2274169','2274173','2274177','2274165','2274301','2274121','2274133','2274141','2274145','2274153','2274149','2274109','2274117','2274125','2274093','2274085','2274097','2274101','2274105','2274081','2273857','2274061','2274073','2274077','2274029','2274069','2274053','2274049','2274057','2274113','2274041','2274013','2274017','2274025','2274033','2273993','2273997','2274001','2274009','2273989','2273977','2273965','2273973','2273985','2273969','2273897','2273949','2273941','2273945','2273961','2273881','2273917','2273933','2273869','2273937','2273929','2273953','2273893','2273905','2273909','2273913','2273885','2273889','2273873','2273849','2273845','2273861','2273853','2273829','2273833','2273837','2273821','2273841','2273733','2273805','2273809','2273797','2273813','2273817','2273681','2273789','2273773','2273781','2273785','2273793','2273749','2273761','2273769','2273921','2273765','2273725','2273737','2273757','2273741','2273721','2273701','2273713','2273717','2273705','2273697','2273745','2273677','2273689','2273693','2273673','2273653','2273657','2273669','2273665','2273633','2273641','2273629','2273637','2273649']
	gameids1415 = ['1302866','1302286']#,'1303004','1303008','1303010','1302992','1302994','1302996','1302998','1303000','1302984','1302982','1302986','1302988','1302990','1302972','1302974','1302976','1302978','1302980','1302386','1302878','1302894','1302898','1302278','1302440','1302858','1302962','1302966','1302970','1302964','1302954','1302956','1302958','1302960','1302942','1302944','1302946','1302948','1302950','1302932','1302934','1302936','1302940','1302326','1302358','1302952','1302348','1302922','1302924','1302926','1302928','1302930','1302864','1302870','1302880','1302888','1303002','1302914','1302916','1302918','1302920','1302442','1302902','1302904','1302906','1302908','1302910','1302912','1302304','1302410','1302436','1302444','1302438','1302426','1302318','1302430','1302432','1302434','1302350','1302306','1302418','1302420','1302422','1302424','1302890','1302370','1302406','1302408','1302412','1302402','1302368','1302396','1302400','1302328','1302862','1302874','1302892','1302882','1302896','1302388','1302392','1302394','1302398','1302280','1302376','1302378','1302380','1302382','1302384','1302366','1302372','1302374','1302356','1302360','1302362','1302364','1302294','1302312','1302352','1302346','1302354','1302876','1302886','1302298','1302302','1302968','1302338','1302340','1302336','1302344','1302342','1302938','1302330','1302332','1302334','1302320','1302322','1302324','1302428','1302308','1302310','1302314','1302416','1302296','1302300','1302290','1302292','1303006','1302288','1302404','1302868','1302872','1302414','1302884','1302276','1302282','1302390','1302860','1302238','1302270','1302284','1302268','1302266','1302272','1302274','1302316','1302256','1302258','1302260','1302262','1302264','1302248','1302246','1302250','1302254','1302252','1302236','1302240','1302242','1302234','1302230','1302232','1302244','1302228','1302226','1302900']
	if (year == 1516):
		return gameids1516
	elif(year == 1415):
		return gameids1415


def getStatsPage(game_ref):
	url = 'http://basketliganherr.se/game/' + game_ref + '/#mbt:11-400$t&0=1'
	result = loadPage(url)
	page = ""
	page = html.fromstring(result)
	return page

def getScorePage(game_ref):
	url = 'http://basketliganherr.se/game/' + game_ref + '/#stf'
	result = loadPage(url)
	page = ""
	page = html.fromstring(result)
	return page

def getPlayByPlay(page):
	#print(page.text_content())
	
	playbyplay_area = page.get_element_by_id('11-400-play-by-play-actions-container')
	playbyplay = playbyplay_area.find_class('mbt-holder-content1 mbt-actions-holder')
	print(playbyplay_area[0].text_content())



def getGameStats(game_ref):
	# to do
	# # get play-by-play
	# # object orient stats
	game = ""
	#stats
	statsPage = getStatsPage(game_ref)
	stats_area = statsPage.get_element_by_id('11-400-tab-container')
	stats = stats_area.find_class('mbt-table')
	#print(stats)
	print(len(stats))
	stat_row_objects = []
	if (len(stats) == 3):
		teams = [stats[0][0], stats[2][0]]
		for team in teams:
			row_list = []
			for player_cnt in range(2, len(team)):
				statsList = []
				statRow = team[player_cnt]
				if player_cnt in range(2,len(team)-2): # All players
					playerStats = getPlayerStats(statRow)
					#print("player stats: " + str(len(playerStats)) + ", " + str(playerStats))
					row_list.append(playerStats)
					statsList =""
				elif (player_cnt == len(team)-1):
					teamStats = getTeamStats(statRow)
					row_list.append(teamStats)
					# ----- set team stats
					#print("team len: " + str(len(teamStats)))
					stat_row_objects.append(basketball.TeamStatRow(teamStats[2:]))
					

		# =========== teamNames =========
		team_area = statsPage.get_element_by_id('11-400')
		teams_and_result = team_area.find_class('mbt-text')
		teams_and_result = teams_and_result[0].text_content()
		teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
		end = int(teams_and_result.index('-'))
		home_name = teams_and_result[7:end]
		home_name = home_name.rstrip()
		away_name = teams_and_result[end+3:]
		stat_row_objects[0].setTeamName(home_name)
		stat_row_objects[1].setTeamName(away_name)

		# define game that should be returned
		game = basketball.Game(home_name, away_name)
		game.setHomeStats(stat_row_objects[0])
		game.setAwayStats(stat_row_objects[1])
		#game.setResult([68, 73], [[12, 14, 25, 17], [16, 20, 18, 19]])

		return game
	else:
		return "error"






def setGameScore(game_ref, game):
	# =========== quarters scores =========
	scorePage = getScorePage(game_ref)
	score_area = scorePage.get_element_by_id('11-400-tab-container')
	quarters = scorePage.find_class('mbt-gamecard-quarters')
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
	game.setResult([homeScore, awayScore], [homeQuarterScore, awayQuarterScore])
	
	

	gameInfo = scorePage.find_class('mbt-gamecard-info')
	gameInfo = gameInfo[0][2]
	# for i in range(0, len(gameInfo)-1):
	# 	print(i)
	# 	print(gameInfo[i].text_content())

	date = gameInfo[0].text_content().strip()
	game_nr = gameInfo[2].text_content().strip()
	#arena = gameInfo[4]
	#attendence = gameInfo[6]
	#referees = gameInfo[8]
	game.setGameRefId(game_ref)
	game.setGameDate(date)
	game.setGameNr(game_nr)
	






	#print(gameInfo[0].text_content())
	#stringson = gameInfo[0].text_content()
	#print(stringson.find('Game number'))
	#print(len(gameInfo[0]))
	#print(gameInfo[0][0])
	#print(gameInfo[0][2].text_content())

	#for i in range(0,len(gameInfo)-1):
	#	print(gameInfo[i].text_content())
	#game.setGameNr(game_nr)
	#game.setReferenceId(ref_id)






	# score_area = page.get_element_by_id('11-400')
	# halftime_scores = team_area.find_class('mbt-gamecard-info')
	# halftime_scores = halftime_scores.text_content()
	# print(halftime_scores)
	#game.setResult([68, 73], [[12, 14, 25, 17], [16, 20, 18, 19]])
	

# def getBasicGameInfo(page):
# 	# teamNames
# 	teams_and_result = page.find_class('mbt-text')
# 	print("size of page: " + str(sys.getsizeof(teams_and_result)))
# 	teams_and_result = teams_and_result[1].text_content()
# 	teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
# 	end = int(teams_and_result.index('-'))
# 	home_name = teams_and_result[7:end]
# 	home_name = home_name.rstrip()
# 	away_name = teams_and_result[end+3:]

# 	#scores
# 	quarters = page.find_class('mbt-gamecard-quarters')
# 	homeQuarterScore = []
# 	awayQuarterScore = []
# 	homeScore = 0
# 	awayScore = 0
# 	for q in quarters[0]:
# 		quarter = q.text_content()
# 		dash = quarter.index('-')
# 		homeQuarterScore.append(int(quarter[0:dash-1]))
# 		awayQuarterScore.append(int(quarter[dash+2:]))
# 	homeScore = sum(homeQuarterScore)
# 	awayScore = sum(awayQuarterScore)

# 	game1 = basketball.Game(home_name, away_name)
# 	game1.setResult([homeScore, awayScore], [homeQuarterScore, awayQuarterScore])

def getPlayerStats(row):
	stat_row = []
	for item_cnt in range(0, len(row)):
		value = str(row[item_cnt].text_content()).strip()
		if (item_cnt == 1): #name
			value = value[0:(len(value)-408)]
		if (item_cnt in [3,5,7]): # split s/f ponts
			if (value.find('/') > 0):
				#print(value)
				stat_row.append(value[0:value.find('/')])
				stat_row.append(value[value.find('/')+1:])
			else:
				stat_row.append(0)
				stat_row.append(0)
		else:
			if (value == ''):
				value = 0
			stat_row.append(value)
	return stat_row


def getTeamStats(row):
	stat_row = []
	for item_cnt in range(0, len(row)):
		value = str(row[item_cnt].text_content()).strip()
		if (item_cnt in [0]): #name
			value = 'nonum'
			stat_row.append('no Name')
		if (item_cnt in [2,4,6]): # split s/f ponts
			if (value.find('/') > 0):
				#print(value)
				stat_row.append(value[0:value.find('/')])
				stat_row.append(value[value.find('/')+1:])
			else:
				stat_row.append(0)
				stat_row.append(0)
		elif(item_cnt == 17):
			pass
		else:
			if (value == ''):
				value = 0
			stat_row.append(value)
	return stat_row
