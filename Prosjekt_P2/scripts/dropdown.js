/*
	FILE NAME: scripts/dropdown.js
	WRITTEN BY: Christoffer Skar Lofsberg
	WHEN: 15.11.2015
	PURPOSE: Dropdown menu
*/

var dropdowns = document.querySelectorAll(".dropdown")
//Since I dont want bugs when the clock goes over 20 or 8 I initialize the date object here
var date = new Date()

//Iterate over all dropdown elements
for(var i = 0; i < dropdowns.length; i++) {
	//Add eventlistener to each dropdown both mouseover and mouseout

	dropdowns[i].addEventListener("mouseover", function(){

		//Display the submenu at DOM, also change backgroundcolor at link object
		this.childNodes[3].style.display = "block"
		this.childNodes[1].style.backgroundColor = "#CCE1F2"
		
		//Add a mouseover event to the submenu ul as well so it stays
		this.childNodes[3].addEventListener("mouseover", function(){
			this.style.display = "block"
		})
	})

	dropdowns[i].addEventListener("mouseout", function(){
		//removing the submenu ul
		this.childNodes[3].style.display = "none"
		//Since we have daynight.js and therefore different colors as background on menu
		//Set the background color at the link object back to its original state
		if(date.getHours() >= 20 || date.getHours() < 8) {
			//Night color
			this.childNodes[1].style.backgroundColor = "#7694A8"
		} else {
			//Day color
			this.childNodes[1].style.backgroundColor = "#B1CEE6"
		}
	})
}

