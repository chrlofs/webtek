//Fetching elements from DOM
var form = document.getElementById("contactForm")
var titleInput = document.getElementById("title")
var textInput = document.getElementById("text")
var submitButton = document.getElementById("send")

//Add new listener for clickevent at button
submitButton.addEventListener("click", function(){
	//Defining some variables, formValid is true as default
	var formValid = true
	var mail
	var text

	//If a input is empty it should be colored red, otherwise it should be white
	if(titleInput.value === "" || titleInput.value === null) {
		titleInput.style.backgroundColor = "#FFB8B8"
		formValid = false
	} else {
		titleInput.style.backgroundColor = "#FFFFFF"
	}
	if(textInput.value === "" || textInput.value === null) {
		textInput.style.backgroundColor = "#FFB8B8"
		formValid = false
	} else {
		textInput.style.backgroundColor = "#FFFFFF"
	}

	//If form still is valid
	if(formValid) {
		//Fetching values from form and empty it
		title = titleInput.value
		titleInput.value = ""
		text = textInput.value
		textInput.value = ""

		//Create a mailto link
		var mailto = "mailto:nedreonlineslette@studntnu.onmicrosoft.com?subject=" + title +
			"&body=" + text 

		//Open a window at the default mailclient with title and text
		window.location.href = mailto
	}
})