const toDoItem = document.createElement ('li');
toDoItem.className = 'toDo';
const toDoSpan = document.createElement('span');
toDoSpan.textContent =toDoText;
const completeButton = document.createElement('button');
    completeButton.textContent = ('complete');
    completeButton.className =('completeBtn');
    completeButton.addEventListener('click', () => {
        toDoItem.classList.toggle('completed');

    });
    const deleteButton = document.createElement ('button');
    deleteButton.textContent =('delete');
