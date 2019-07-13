
function delay () {
	return new Promise (res => { setTimeout(() => {
    let h = pageYOffset
		res(h-5)
	},5)
		
	})
}

async function goTop() {
  let n = pageYOffset
    
	while (n > 0) {
    var y = await delay()
    window.scrollTo(0,y)	
	 	n -=5
	}
}

var buttonUp = document.getElementById("buttonUp")

function showButton() {
  let y = pageYOffset
  if (y > 100) {
    buttonUp.classList.remove('hideButtonUp');
    buttonUp.classList.add('showButonUp');
  } else {
    buttonUp.classList.add('hideButtonUp');
    buttonUp.classList.remove('showButonUp');
  }
}

window.addEventListener('scroll', showButton);
