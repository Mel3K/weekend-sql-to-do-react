import {useEffect, useState} from 'react';
import axios from 'axios';

function App () {
  const [toDoList, setToDoList] = useState ([]);
  const [newTask, setNewTask] = useState ('');
  const [completed, setCompleted] = useState ('');

useEffect(() => {
  fetchToDoList();

}, [])

const fetchToDoList = () => {
  axios.get('/api/toDoList')
      .then((response) => {
        console.log(response.data);
        // Then we update our react variable to match.
        // React will update the DOM when it notices the react variable change!
        setCreatureList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
const addTask = (event) => {
  // We hit submit in a form, so we need to stop the page refreshing
  event.preventDefault();

  // We pack up our data
  const newTask = {
    toDo: newToDo,
    completed: newCompleted
  }

  // We send it to the server
  axios.post('/api/toDo', newToDo)
    .then((response) => {
      console.log(response);

      // Clear out the inputs, for the next creature to be added.
      setNewToDo('');
      setNewCompleted('');

      // Fetch the updated list from the server
      fetchTodo();
    })
    .catch((error) => {
      console.log(error);
    })
}

const deleteToDo = (toDoId => {

  axios.delete(`/api/toDo/${toDoId}`)
    .then((response) => {
      console.log(response);
      fetchCreatures();
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <div>

      <form onSubmit = {addToDo}>
        {

        }
        <label htmlFor="item">Task to Add:</label>
        {

        }
        {

        }
        <input id="item" onChange={(event) => setNewToDo(event.target.value)} value={newToDo} />

<label htmlFor="done">Is Task Done:</label>
<input id="done" onChange={(event) => setNewToDo(event.target.value)} value={newToDo} />

<button type="submit">Add New Task</button>
      </form>
      <ul>
        {toDoList.map(
          function (toDo) {
            // Every list item must have a unique key
            // This purely for react to be able to keep track of things behind the scenes.
            // We started out using creature.name, but once we introduced the server we can change it to
            // creature.id, which is guarenteed to be truely unique.
            return (
              <li key={toDo.id}>{toDo.name} is from {creature.origin}
                <button onClick={() => {toggleTask(toDo.id)}}>
                  {toDo.done ? 'Completed' : 'NotCompleted' }
                </button>
                <button onClick={() => deleteToDo(toDo.id)}>
                  🗑️
                </button>
              </li>);
          }
        )}
      </ul>

  
      <h1>TO DO APP</h1>
    </div>
  );

}
)

export default App
