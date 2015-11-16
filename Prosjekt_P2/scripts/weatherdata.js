/*
	FILE NAME: scripts/contactForm.js
	WRITTEN BY: Christoffer Skar Lofsberg
	WHEN: 10.11.2015
	PURPOSE: Display current weather at index
*/

var div = document.getElementById("weatherData")
//You can use the yr api xml like http://www.yr.no/sted/Norge/Sør-Trøndelag/Trondheim/Studentersamfundet/varsel.xml
//Due to access permissions, we has downloaded one xml file locally
var url = "xml/yr.xml"

//New XMLHttpRequest
if(window.XMLHttpRequest) {
	var xmlHttp = new XMLHttpRequest()	
} else {
	//IE6 & IE7
	var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
}


xmlHttp.open("get", url, true)
xmlHttp.send()

//Defining onreadystatechange method
xmlHttp.onreadystatechange = function() {
	//If correct status
	//if (xmlHttp.readyState == 4 && xmlHttp.status == 200) { -Dont need to use this since the xml is locally
		//Parse the data into XML 
		var weatherXml = xmlHttp.responseXML
		
		//Getting location, credit, lastUpdate from the xml document
		var location = weatherXml.getElementsByTagName("location")[0].childNodes[1].textContent
		var credit = weatherXml.getElementsByTagName("credit")[0].childNodes[5].attributes[0].value
		
		var lastUpdate = weatherXml.getElementsByTagName("lastupdate")[0].textContent
		//Due to english date format we split the date and time into an array
		var lastUpdateArr = [lastUpdate.slice(0, 4), lastUpdate.slice(5, 7), lastUpdate.slice(8, 10), 
			lastUpdate.slice(11, 13), lastUpdate.slice(14, 16)]
		
		//Getting the tabular with all weatherdata
		var thisPeriod = weatherXml.getElementsByTagName("tabular")[0].childNodes[1]
		//New object with status now, symbol for status, temperature and precipitation
		var weatherNow = {
			weatherStatus: thisPeriod.getElementsByTagName("symbol")[0].attributes[2].value,
			symbol: "images/sym/" + thisPeriod.getElementsByTagName("symbol")[0].attributes[3].value + ".png",
			temperature: thisPeriod.getElementsByTagName("temperature")[0].attributes[1].value + "\u2103",
			precipitation: null
		}

		//Check if raining, if you have rain you will have a min and max attribute else you will only have one attribute
		if(thisPeriod.getElementsByTagName("precipitation")[1] && thisPeriod.getElementsByTagName("precipitation")[2]) {
			weatherNow["precipitation"] = thisPeriod.getElementsByTagName("precipitation")[0].attributes[1].value + "-" +
				thisPeriod.getElementsByTagName("precipitation")[0].attributes[2].value + "mm"
		} else {
			weatherNow["precipitation"] = thisPeriod.getElementsByTagName("precipitation")[0].attributes[0].value + "mm"
			if(weatherNow["precipitation"] != 0) {
				weatherNow["precipitation"] = "Ingen"
			}
		}

		//Creating header with location name in div
		var weatherHeader = document.getElementById("weatherHeader")
		weatherHeader.innerHTML = "Været nå for " + location
		
		//Collect image and append it on div
		var img = document.createElement("img")
		img.src = weatherNow["symbol"]
		img.alt = "A weather icon"
		div.appendChild(img)
		
		//Create a new p element
		var weather = document.createElement("p")
		//Get the weatherstatus first and append it on div
		var weatherText = document.createTextNode(weatherNow["weatherStatus"])
		weather.appendChild(weatherText)
		div.appendChild(weather)
		//Getting temperature and append it on div, reuse variable
		weather = document.createElement("p")
		weatherText = document.createTextNode(weatherNow["temperature"])
		weather.appendChild(weatherText)
		div.appendChild(weather)
		//Getting precipitation and append it on div, reuse variable
		weather = document.createElement("p")
		weatherText = document.createTextNode(weatherNow["precipitation"] + " nedbør")
		weather.appendChild(weatherText)
		div.appendChild(weather)

		//Use the lastupdatearray to get lastupdate and append it on div
		var lastUpd = document.createElement("p")
		var lastUpdText = document.createTextNode("Siste måling: " + lastUpdateArr[2] + "-" + 
			lastUpdateArr[1] + "-" + lastUpdateArr[0] + " kl: " + lastUpdateArr[3] + ":" + 
			lastUpdateArr[4])
		lastUpd.appendChild(lastUpdText)
		lastUpd.style.fontSize = "11px"
		div.appendChild(lastUpd)
		
		//Add credit to yr.no
		var cred = document.createElement("p")
		cred.style.fontSize = "9px"
		var credText = document.createTextNode(credit)
		cred.appendChild(credText)
		div.appendChild(cred)
	//} -If close we dont need since it´s locally
}