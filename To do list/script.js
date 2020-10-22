function addTask() {
  if (document.getElementById('new-task').value) 
  {
    var list = document.getElementById('tasks');
    var newItemFirst = document.createElement('li');
    var newText = document.getElementById('new-task').value;
    var newTextNode = document.createTextNode(newText)
    newItemFirst.appendChild(newTextNode);
    list.appendChild(newItemFirst);
    document.getElementById('new-task').value = '';
  }
}
function removeAll() {
  listItems = document.querySelectorAll('li')
  var i;
  for (i = 0; i < listItems.length; i++) {
    var removeEl = document.getElementsByTagName('li')[0];
    var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
  }
}

var addButton = document.getElementById('add')
addButton.addEventListener('click', addTask, false);

var deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', removeAll, false);

document.getElementById("tasks").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName == "LI") {
    e.target.className = "completed";
  }
})
