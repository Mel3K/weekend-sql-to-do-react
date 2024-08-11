$document.ready(function(){
    console.log('yikes');
})
const todoItem = document.createElement ('li');
todoItem.className = 'todo';
const todoSpan = document.createElement('span');
todoSpan.textContent =todoText;
const completeButton = document.createElement('button');
    completeButton.textContent = ('complete');
    completeButton.className =('completeBtn');
    completeButton.addEventListener('click', () => {
        todoItem.classList.toggle('completed');

    });
    const deleteButton = document.createElement ('button');
    deleteButton.textContent =('delete');
