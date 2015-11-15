/*
	FILE NAME: scripts/dropdown.js
	WRITTEN BY: Christoffer Skar Lofsberg
	WHEN: 05.11.2015
	PURPOSE: Create dropdown menus
*/

//Selecting all elements with class dropdown
var dropdowns = document.querySelectorAll(".dropdown")

//Iterate over all dropdown elements
for(var i = 0; i < dropdowns.length; i++) {
	//Add eventlistener to each dropdown
	dropdowns[i].addEventListener("click", function(){
		//If dispaly is not block, make it block
		if(this.childNodes[3].style.display != "block") {
			this.childNodes[3].style.display = "block"
		//Or hide it
		} else {
			this.childNodes[3].style.display = "none"
		}
	})
}
