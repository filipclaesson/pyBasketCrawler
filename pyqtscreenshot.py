
	

class Browser(QWebView):
	def __init__(self, url, parent=None):
		super(Browser, self).__init__(parent)
		self.timerScreen = QTimer()
		self.timerScreen.setInterval(2000)
		self.timerScreen.setSingleShot(True)
		self.timerScreen.timeout.connect(self.takeScreenshot)
		self.loadFinished.connect(self.timerScreen.start)
		self.load(QUrl(url))
		

		#self.load(QUrl("file:///Users/Filip/Desktop/Programmering/Webbprogrammering/Webcrawler/pyBasketCrawler/Basketligan%20Herr%20_%20SBBF.htm#mbt:11-400$t&0=2"))

	def takeScreenshot(self):
		frame = self.page().mainFrame()
		self.page().setViewportSize(frame.contentsSize())
		image = QImage(self.page().viewportSize(), QImage.Format_ARGB32)
		painter = QPainter(image)
		self.page().mainFrame().render(painter)
		painter.end()
		image.save(self.title() + ".png")
		sys.exit()
