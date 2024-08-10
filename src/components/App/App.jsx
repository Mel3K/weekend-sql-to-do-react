import {useEffect, useState} from 'react';
import axios from 'axios';

function App () {
  const [toDoList, setToDoList] = useState ([]);
  const [newTask, setNewTask] =useState ('');
  const [completed, setCompleted] = useState ('');

useEffect{() +> {
  fetchToDoList();

}, []}

const fetchToDoList = () +> {}

  return (
    <div>
      <h1>TO DO APP</h1>
    </div>
  );

}

export default App
