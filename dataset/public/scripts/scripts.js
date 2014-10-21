function onHover(event){
  var node = event.target;
  // Modify the node here! (e.g. color)
 	node.style.backgroundColor = "red";
}

// replace `data-class-name` with html class you use for a row of your data
window.onload = function() {
  var rows = document.getElementsByClassName('cool');
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('mouseover', onHover);
  }
}