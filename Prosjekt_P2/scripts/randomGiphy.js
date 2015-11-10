//Creating a new image object and fetching the randomgiphy element from HTML 
var gif = new Image
gif.style.maxWidth = "250px"
var randomGiphy = document.getElementById("randomGiphy")

//Create a new XMLHttlRequest
var xmlhttp = new XMLHttpRequest() 
//Empty string for a totally random gif, if searchWord you will get a gif related to that string
var searchWord = ""
var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchWord
//New variable jsonObject, will hold a json file from api later
var jsonObject

//Sending a asynchronous get request to giphy
xmlhttp.open("get", url, true)
xmlhttp.send()

xmlhttp.onreadystatechange = function() {
	//When xmlhttp is at readystate 4 and the server respond with a 200 status (found)
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		//Parsing jsondata from site into jsonObject
		jsonObject = JSON.parse(xmlhttp.responseText)
		//Get a fixed link holding a 200px width gif from the json data, set src on gif to this link
		if(jsonObject["data"]) {
			gif.src = jsonObject["data"]["image_url"]	
			//Appending the gif to site
			randomGiphy.appendChild(gif)
		} else {
			var error = document.createElement("p")
			var text = document.createTextNode("Too many connections")
			error.appendChild(text)
			randomGiphy.appendChild(error)
		}
		
		
	} 
}
