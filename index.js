function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var listItem = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (var i = 0; i < listItem.length; i++) {
    listItem[i].innerHTML = parseInt(listItem[i].innerHTML) + n
  }
  return listItem
}

function deepestChild() {
  var listItem = document.getElementById('grand-node')
  return listItem.children[3].innerHTML
}