var h = document.getElementsByClassName('hamburger')[0];
var o = document.getElementsByClassName('overlay')[0];

h.addEventListener('click', function(e) {
	e.preventDefault();
	this.classList.toggle('active');
	o.classList.toggle('visible');
});

var m = document.getElementById("menu-toggle");
m.addEventListener('click', function(e) {
	e.preventDefault();
	this.classList.toggle('open');
});
