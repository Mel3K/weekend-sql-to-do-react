import {useEffect, useState} from 'react';
import axios from 'axios';

function App () {
  const [todoList, setTodoList] = useState ([]);
  const [task, setTask] = useState ('');
  const [completed, setCompleted] = useState ('');

useEffect(() => {
  fetchTodo();

}, [])

const fetchTodo = () => {
  axios.get('/api/todo')
      .then((response) => {
        console.log(response.data);
        // Then we update our react variable to match.
        // React will update the DOM when it notices the react variable change!
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
}


const addTodo = (event) => {
  // We hit submit in a form, so we need to stop the page refreshing
  const newTodo = {
    todo: 'task',
    completed: 'completed'
  }
  event.preventDefault();
  console.log('submitted');
  axios.post('/api/todo', newTodo)
    .then((response) => {
      console.log(response);

      // Clear out the inputs, for the next creature to be added.
      setTask('');
      setCompleted('');

      // Fetch the updated list from the server
      fetchTodo();
    })
    .catch((error) => {
      console.log(error);
    })
}



  // We pack up our data



  // We send it to the server


  const deleteTodo = (todoId) => {

  axios.delete(`/api/todo/${todoId}`)
    .then((response) => {
      console.log(response);
      fetchTodo();
    })
    .catch((error) => {
      console.log(error);
    })

    const toggleTask = (initialState) => {
      const [toggleValue, setToggleValue] = useState(initialState);
      const toggler = () => { setToggleValue(!toggleValue) };
      return [toggleValue, toggler]
    };



    //axios.put(`api/todo/${todoId}`)
    //.then()

  }

  return (
    <div>
        <h1>TO DO APP</h1>

      <form onSubmit = {addTodo}>
     
        <label htmlFor="item">Task to Add:</label>

     
        <input id="item" onChange={(event) => setTask(event.target.value)} value={task} />

<label htmlFor="done">Is Task Done:</label>
        <input id="done" onChange={(event) => setCompleted(event.target.value)} value={completed} />

<button type="submit">Add New Task</button>
      </form>
      <ul>
        {todoList.map(
          function (todo) {
            // Every list item must have a unique key
            // This purely for react to be able to keep track of things behind the scenes.
            // We started out using creature.name, but once we introduced the server we can change it to
            // creature.id, which is guarenteed to be truely unique.
            return (
              <li key={todo.id}>{todo.task} is done {todo.completed}
                <button id="done" onClick={() => { toggleTask(todo.id) }}>
                  {todo.completed ? 'Completed' : 'NotCompleted' }
                </button>
                <button id="del" onClick={() => deleteTodo(todo.id)}>
                  🗑️ Trash Me
                </button>
              </li>);
          }
        )}
      </ul>

  
    
    </div>
  );

}



export default App
