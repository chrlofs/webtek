/*
	FILE NAME: scripts/footer.js
	WRITTEN BY: Christoffer Skar Lofsberg
	WHEN: 15.11.2015
	PURPOSE: Change color scheme at night
*/

var footerImg = document.getElementById("footer-img")
var headerImg = document.getElementById("header-img")
var body = document.getElementsByTagName("body")[0]
var menu = document.getElementById("menu")

var date = new Date() 
var hours = date.getHours()

if(hours >= 20 || hours < 8) {
	body.style.backgroundColor = "#5B7D93"
	menu.style.backgroundColor = "#7694A8"

	headerImg.src = "images/header-night.jpg"
	footerImg.src = "images/footer-night.jpg"

} else {
	body.style.backgroundColor =  "#CCE1F2"
	menu.style.backgroundColor =  "#B1CEE6"
	headerImg.src = "images/header.jpg"
	footerImg.src = "images/footer.jpg"
}