var d = new Date()
var hora = d.getHours()
var min = d.getMinutes('')
var sec = d.getSeconds()
var h = document.getElementById('hora').innerHTML = hora
var m = document.getElementById('min').innerHTML = min
var s = document.getElementById('seg').innerHTML = sec
var segundos = setInterval(function(){
	
	sec += 1
	if (sec > 59){
		sec = 0
		
	}

	
	
	if (sec < 10){
			var s = document.getElementById('seg').innerHTML = '0' + sec
	} else{
		var s = document.getElementById('seg').innerHTML = sec	
	}
	if (sec === 0){
		var s = document.getElementById('seg').innerHTML = '00'
	var m = document.getElementById('min').innerHTML = min + 1
	}
	if (min > 59){
		min = 0
	}
	if (min === 0){
		var h = document.getElementById('hora').innerHTML = hora + 1
	}
}, 1000)

if (h > 6 && h < 12){
	document.getElementById('bg').style.backgroundImage = 'url(img/manha.jpg)'
}
if (h > 12 && h < 17){
	document.getElementById('bg').style.backgroundImage = 'url(img/tarde.jpg)'
}
if (h > 16 && h < 18){
	document.getElementById('bg').style.backgroundImage = 'url(img/anoitecer.jpg)'
}
if (h > 18 && h < 23){
	document.getElementById('bg').style.backgroundImage = 'url(img/noite.jpg)'
}
if (h > 0 && h < 5){
	document.getElementById('bg').style.backgroundImage = 'url(img/noite.jpg)'
}
if (h > 5 && h < 7){
	document.getElementById('bg').style.backgroundImage = 'url(img/amanhecer.jpg)'
}
