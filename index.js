var h = document.getElementsByClassName('hamburger')[0];
var o = document.getElementsByClassName('overlay')[0];


/* 
    Explanations:
    - pi is the length/end point of the cosinus intervall (see above)
    - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
      (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
    - newTimestamp - oldTimestamp equals the duration

      a * cos (bx + c) + d                      | c translates along the x axis = 0
    = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
    = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
    = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
    = cosParameter + cosParameter * (cos scrollCount * x)
*/

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