var div = document.getElementById("weatherData")
var url = "http://www.yr.no/sted/Norge/Sør-Trøndelag/Trondheim/Studentersamfundet/varsel.xml"

var xmlHttp = new XMLHttpRequest()

xmlHttp.open("get", url, true)
xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xmlHttp.setRequestHeader('Access-Control-Allow-Methods', '*');
xmlHttp.send()

xmlHttp.onreadystatechange = function() {
	if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		var weatherXml = xmlHttp.responseXML
		var location = weatherXml.getElementsByTagName("location")[0].childNodes[1].textContent
		var credit = weatherXml.getElementsByTagName("credit")[0].childNodes[5].attributes[0].value
		var lastUpdate = weatherXml.getElementsByTagName("lastupdate")[0].textContent
		var lastUpdateArr = [lastUpdate.slice(0, 4), lastUpdate.slice(5, 7), lastUpdate.slice(8, 10), 
			lastUpdate.slice(11, 13), lastUpdate.slice(14, 16)]
		var thisPeriod = weatherXml.getElementsByTagName("tabular")[0].childNodes[1]
		
		var weatherNow = {
			weatherStatus: thisPeriod.getElementsByTagName("symbol")[0].attributes[2].value,
			symbol: "images/sym/" + thisPeriod.getElementsByTagName("symbol")[0].attributes[3].value + ".png",
			temperature: thisPeriod.getElementsByTagName("temperature")[0].attributes[1].value + "\u2103",
			precipitation: thisPeriod.getElementsByTagName("precipitation")[0].attributes[1].value + "-" +
				thisPeriod.getElementsByTagName("precipitation")[0].attributes[2].value + "mm"
		}

		var weatherHeader = document.getElementById("weatherHeader")
		weatherHeader.innerHTML = "Været nå for " + location
		var img = document.createElement("img")
		img.src = weatherNow["symbol"]
		div.appendChild(img)
		var weather = document.createElement("p")
		var weatherText = document.createTextNode(weatherNow["weatherStatus"])
		weather.appendChild(weatherText)
		div.appendChild(weather)
		weather = document.createElement("p")
		weatherText = document.createTextNode("Temp: " + weatherNow["temperature"])
		weather.appendChild(weatherText)
		div.appendChild(weather)
		weather = document.createElement("p")
		weatherText = document.createTextNode("Nedbør: " + weatherNow["precipitation"])
		weather.appendChild(weatherText)
		div.appendChild(weather)

		var lastUpd = document.createElement("p")
		var lastUpdText = document.createTextNode("Siste måling: " + lastUpdateArr[2] + "-" + 
			lastUpdateArr[1] + "-" + lastUpdateArr[0] + " kl: " + lastUpdateArr[3] + ":" + 
			lastUpdateArr[4])
		lastUpd.appendChild(lastUpdText)
		lastUpd.style.fontSize = "11px"
		div.appendChild(lastUpd)
		var cred = document.createElement("p")
		cred.style.fontSize = "9px"
		var credText = document.createTextNode(credit)
		cred.appendChild(credText)
		div.appendChild(cred)
	}
}