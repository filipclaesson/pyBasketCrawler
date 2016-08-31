class Game(object):
    def __init__(self, homeName, awayName):
        self.homeName = homeName
        self.awayName = awayName

    def setResult(self, total, quarters):
        self.result = Result(total, quarters)

    def getResult(self):
        return self.result

    def write(self):
        print(self.homeName + " vs " + self.awayName)
        #print(str(self.homeResult.getScore()) + " " + str(self.awayResult.getScore()))
        print(self.homeResult.quarters)
        print(self.awayResult.quarters)


class Result(object):
    def __init__(self, score, quarters):
        self.score = score
        self.quarters = quarters

    def getScore(self):
        return self.score

    def getScoreQuarters(self, q=0):
        if (q == 0):
            return self.quarters
        else:
            return [self.quarters[0][q-1], self.quarters[1][q-1]] 

    def getHalftimeScore(self):
        return [self.quarters[0][0]+self.quarters[0][1], self.quarters[1][0] + self.quarters[1][1]]