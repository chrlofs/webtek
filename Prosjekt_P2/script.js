var gif = new Image
var dagensGiphy = document.getElementById("dagensGiphy")

var xmlhttp = new XMLHttpRequest() 
var searchWord = "amateur"
var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchWord
var jsonObject = null
var gifURL = "http://media1.giphy.com/media/"

xmlhttp.open("get", url, true)
xmlhttp.send()

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		jsonObject = JSON.parse(xmlhttp.responseText)
		console.log(jsonObject)
		gif.src = jsonObject["data"]["fixed_width_downsampled_url"]
		dagensGiphy.appendChild(gif)
	} 
}




gif.onload = function(){
	dagensGiphy.appendChild(gif)
}