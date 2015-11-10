var form = document.getElementById("contactForm")
var titleInput = document.getElementById("title")
var textInput = document.getElementById("text")
var submitButton = document.getElementById("send")

submitButton.addEventListener("click", function(){
	var formValid = true
	var mail
	var text

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

	if(formValid) {
		title = titleInput.value
		titleInput.value = ""
		text = textInput.value
		textInput.value = ""

		var mailto = "mailto:nedreonlineslette@studntnu.onmicrosoft.com?subject=" + title +
			"&body=" + text 

		window.location.href = mailto
	}
})