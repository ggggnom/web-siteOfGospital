

let cancelMenu = document.getElementById('cancel')
cancelMenu.onclick = function() {
  let mobileMenu = document.querySelector('.menuOnMobile')
  mobileMenu.style.visibility = 'hidden'
}

let menu = document.querySelector('.menu--section--menu')
menu.onclick = function () {
  let memenuOnMobile = document.getElementById('menuOnMobile')
  menuOnMobile.style.display = 'block'
}

let cancel = document.getElementById('cancel')
cancel.onclick = function () {
  let memenuOnMobile = document.getElementById('menuOnMobile')
  menuOnMobile.style.display = 'none'
}


/*let appointment = document.querySelector('.appointment')
appointment.onclick = function () {
  let modal = document.querySelector('.modal')
  modal.style.opacity = 1
  modal.style.pointerEvents = 'auto'
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none'
}



let close = document.getElementById('close')
close.onclick = function () {
  document.body.style.overflow = 'visible';
  let modalClose = document.querySelector('.modal')
  modalClose.style.opacity = 0
  modalClose.style.display = 'none'
  document.body.style.pointerEvents = 'auto'
}
/*

let callAmbulance = document.querySelector('.callAmbulance')
callAmbulance.onclick = function () {
  let window = document.querySelector('.openWindow')
  openWindow.style.opacity = 1
  openWindow.style.pointerEvents = 'auto'
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none'
}

let closeMe = document.getElementById('closeMe')
closeMe.onclick = function () {
  document.body.style.overflow = 'visible';
  let closeWindow = document.querySelector('.openWindow')
  closeWindow.style.opacity = 0
  closeWindow.style.display = 'none'
  document.body.style.pointerEvents = 'auto'
}

/*
let sendTelephone = document.querySelector('.sendTelephone')
sendTelephone.onclick = function () {
  let cancelWindow = document.querySelector('.openWindow')
  cancelWindow.style.opacity = 0
  cancelWindow.style.display = 'none'
  let modalCancel = document.querySelector('.modal')
  modalCancel.style.opacity = 0
  modalCancel.style.display = 'none'
  let openAboutSending = document.getElementById('openAboutSending')
  openAboutSending.style.opacity = 1
  openAboutSending.style.pointerEvents = 'auto'
}

let closeAboutSending = document.querySelector('.closeAboutSending')
closeAboutSending.onclick = function () {
  let cancelAboutSending = document.getElementById('openAboutSending')
  cancelAboutSending .style.opacity = 0
  cancelAboutSending .style.display = 'none'
  document.body.style.pointerEvents = 'auto'
  document.body.style.overflow = 'visible';
}

let sendTelephoneWithout = document.querySelector('.sendTelephoneWithout')
sendTelephoneWithout.onclick = function () {
  let openAboutSendingMe = document.getElementById('openAboutSending')
  openAboutSendingMe.style.opacity = 1
  openAboutSendingMe.style.pointerEvents = 'auto'
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none'
}
/*let secondDataSmall = document.getElementById('secondDataSmall')
secondDataSmall.onclick = function () {
  let scheduleFirst = document.getElementById('scheduleFirst')
  scheduleFirst.style.display = 'none'
  let starlite = document.querySelector('.starlite')
  starlite.style.display = 'none'
  secondDataSmall.style.display = 'none'
  let firstData = document.getElementById('firstData')
  firstData.style.display = 'none'
  let scheduleSecond = document.getElementById('scheduleSecond')
  scheduleSecond.style.display = 'block'
  let cloud = document.getElementById('cloud')
  cloud.style.display = "block"
  let firstDataSmall = document.getElementById('firstDataSmall')
  firstDataSmall.style.display = "block"
  let secondData = document.getElementById('secondData')
  secondData.style.display = "block"
  let scheduleThird = document.getElementById('scheduleThird')
  scheduleThird.style.display = 'none'
  let wolf = document.getElementById('wolf')
  wolf.style.display = 'none'
  let thirdData = document.getElementById('thirdData')
  thirdData.style.display = 'none'
  let thirdDataSmall = document.getElementById('thirdDataSmall')
  thirdDataSmall.style.display = 'block'
  let fourthData = document.getElementById('fourthData')
  fourthData.style.display = "none"
  let scheduleFourth = document.getElementById('scheduleFourth')
  scheduleFourth.style.display = 'none'
  let fourthDataSmall = document.getElementById('fourthDataSmall')
  fourthDataSmall.style.display = "block"
}

firstDataSmallOn = document.getElementById('firstDataSmall')
firstDataSmallOn.onclick = function () {
  firstDataSmallOn.style.display = 'none'
  firstDataOn = document.getElementById('firstData')
  firstDataOn.style.display = 'block'
  let scheduleThirdOn = document.getElementById('scheduleThird')
  scheduleThirdOn.style.display = 'none'
  let wolfOn = document.getElementById('wolf')
  wolfOn.style.display = 'none'
  let thirdDataOn = document.getElementById('thirdData')
  thirdDataOn.style.display = 'none'
  let thirdDataSmallOn = document.getElementById('thirdDataSmall')
  thirdDataSmallOn.style.display = 'block'
  let scheduleFirstOn = document.getElementById('scheduleFirst')
  scheduleFirstOn.style.display = 'block'
  let starliteOn = document.querySelector('.starlite')
  starliteOn.style.display = 'block'
  let secondDataOn = document.getElementById('secondData')
  secondDataOn.style.display = 'none'
  let secondDataSmallOn = document.getElementById('secondDataSmall')
  secondDataSmallOn.style.display = 'block'
  let fourthDataOn = document.getElementById('fourthData')
  fourthDataOn.style.display = "none"
  let scheduleFourthOn = document.getElementById('scheduleFourth')
  scheduleFourthOn.style.display = 'none'
  let fourthDataSmallOn = document.getElementById('fourthDataSmall')
  fourthDataSmallOn.style.display = "block"
  let scheduleSecondOn = document.getElementById('scheduleSecond')
  scheduleSecondOn.style.display = 'none'
  let cloudOn = document.getElementById('cloud')
  cloudOn.style.display = "none"
}

thirdDataSmallClick = document.getElementById('thirdDataSmall')
thirdDataSmallClick.onclick = function () {
  let scheduleThirdClick = document.getElementById('scheduleThird')
  scheduleThirdClick.style.display = 'block'
  let wolfClick = document.getElementById('wolf')
  wolfClick.style.display = 'block'
  let scheduleSecondClick = document.getElementById('scheduleSecond')
  scheduleSecondClick.style.display = 'none'
  let cloudClick = document.getElementById('cloud')
  cloudClick.style.display = "none"
  let scheduleFirstClick = document.getElementById('scheduleFirst')
  scheduleFirstClick.style.display = 'none'
  let starliteClick = document.querySelector('.starlite')
  starliteClick.style.display = 'none'
  let thirdDataClick = document.getElementById('thirdData')
  thirdDataClick.style.display = 'block'
  let thirdDataSmallClick = document.getElementById('thirdDataSmall')
  thirdDataSmallClick.style.display = 'none'
  let secondDataClick = document.getElementById('secondData')
  secondDataClick.style.display = 'none'
  let firstDataClick = document.getElementById('firstData')
  firstDataClick.style.display = 'none'
  let secondDataSmallClick = document.getElementById('secondDataSmall')
  secondDataSmallClick.style.display = 'block'
  let firstDataSmallClick = document.getElementById('firstDataSmall')
  firstDataSmallClick.style.display = 'block'
  let fourthDataClick = document.getElementById('fourthData')
  fourthDataClick.style.display = "none"
  let scheduleFourthClick = document.getElementById('scheduleFourth')
  scheduleFourthClick.style.display = 'none'
  let fourthDataSmallClick = document.getElementById('fourthDataSmall')
  fourthDataSmallClick.style.display = "block"
}


let fourthDataSmallTape = document.getElementById('fourthDataSmall')
fourthDataSmallTape.onclick = function (){
  fourthDataSmallTape.style.display = "none"
  let fourthDataTape = document.getElementById('fourthData')
  fourthDataTape.style.display = "block"
  let scheduleFourthTape = document.getElementById('scheduleFourth')
  scheduleFourthTape.style.display = 'block'
  let thirdDataTape = document.getElementById('thirdData')
  thirdDataTape.style.display = 'none'
  let thirdDataSmallTape = document.getElementById('thirdDataSmall')
  thirdDataSmallTape.style.display = 'block'
  let secondDataTape = document.getElementById('secondData')
  secondDataTape.style.display = 'none'
  let firstDataTape = document.getElementById('firstData')
  firstDataTape.style.display = 'none'
  let secondDataSmallTape = document.getElementById('secondDataSmall')
  secondDataSmallTape.style.display = 'block'
  let firstDataSmallTape = document.getElementById('firstDataSmall')
  firstDataSmallTape.style.display = 'block'
  let scheduleThirdTape = document.getElementById('scheduleThird')
  scheduleThirdTape.style.display = 'none'
  let wolfTape = document.getElementById('wolf')
  wolfTape.style.display = 'none'
  let scheduleSecondTape = document.getElementById('scheduleSecond')
  scheduleSecondTape.style.display = 'none'
  let cloudTape = document.getElementById('cloud')
  cloudTape.style.display = "none"
  let scheduleFirstTape = document.getElementById('scheduleFirst')
  scheduleFirstTape.style.display = 'none'
  let starliteTape = document.querySelector('.starlite')
  starliteTape.style.display = 'none'
}*/

var header = $('.lolo'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

let images = document.querySelectorAll('.photo--before--after img')
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacitym')
  }
  images[current].classList.remove('opacitym')

  if (current + 1 == images.length) {
    current = 0
  } else {
    current++
  }
}

let dod = document.querySelector('.arrow--two')
dod.onclick = slider


let ddd = document.querySelector('.arrow--one')
ddd.onclick = slider
