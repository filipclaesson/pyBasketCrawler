class Game(object):
    def __init__(self, homeName, awayName):
        self.homeName = homeName
        self.awayName = awayName

    def setHomeResult(self, total, quarters):
        self.homeResult = Result(total, quarters)

    def setAwayResult(self, total, quarters):
        self.awayResult = Result(total, quarters)

    def write(self):
        print(self.homeName + " vs " + self.awayName)
        print(str(self.homeResult.getScore()) + " " + str(self.awayResult.getScore()))
        print(self.homeResult.quarters)
        print(self.awayResult.quarters)

class Result(object):
    def __init__(self, score, quarters):
        self.score = score
        self.quarters = quarters

    def setScore(self, score):
        self.score = score

    def getScore(self):
        return self.score

    def getQ1(self):
        return self.quarters[0]

    def getQ2(self):
        return self.quarters[1]

    def getQ3(self):
        return self.quarters[2]

    def getQ4(self):
        return self.quarters[3]






   