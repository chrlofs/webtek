var footerImg = document.getElementById("footer-img")
var headerImg = document.getElementById("header-img")
var body = document.getElementsByTagName("body")[0]

var date = new Date() 
var hours = date.getHours()

if(hours >= 20 || hours < 8) {
	body.style.backgroundColor = "#5B7D93"
	headerImg.src = "images/header-night.jpg"
	footerImg.src = "images/footer-night.jpg"

} else {
	body.style.backgroundColor =  "#CCE1F2"
	headerImg.src = "images/header.jpg"
	footerImg.src = "images/footer.jpg"
}