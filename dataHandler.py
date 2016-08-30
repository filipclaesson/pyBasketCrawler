import game as game
from lxml import html 

def handleData(html):



	# teamNames
	teams_and_result = html.find_class('mbt-text')
	teams_and_result = teams_and_result[1].text_content()
	teams_and_result = ''.join(i for i in teams_and_result if not i.isdigit())
	end = int(teams_and_result.index('-'))
	homeName = teams_and_result[7:end]
	homeName = homeName.rstrip()
	awayName = teams_and_result[end+3:]

	#scores
	quarters = html.find_class('mbt-gamecard-quarters')
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
	game1.setHomeResult(homeScore, homeQuarterScore)
	game1.setAwayResult(awayScore, awayQuarterScore)

	game1.write()
		
