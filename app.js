function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; };

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    newToDoText.value = '';
    id++;

    renderTheUI();
  }

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    function deleteToDo(){
      toDos = toDos.filter(item => {
        return item !== toDo;
      });
    }

    deleteButton.addEventListener('click', event => {
          deleteToDo();
          renderTheUI();
        });

    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;
    deleteButton.textContent = 'Delete';

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
  });
}

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
}
