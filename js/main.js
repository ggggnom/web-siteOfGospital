let secondData = document.querySelector('#secondData')
secondData.onclick = function () {
  let first = document.getElementById('first')
  first.style.display = 'none'
  let second = document.getElementById('second')
  second.style.display = 'inline-block'
}
