import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {
  const name ="hung";
  const age = 22;
  const data = {
    address: "hanoi",
    country: "Viet Nam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  // eslint-disable-next-line no-unused-vars
  const [TodoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }

  ])
  // addNewTodo();

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
      addNewTodo= {addNewTodo}
      />
      <TodoData
      name = {name}
      age = {age}
      data = {data}
      TodoList= {TodoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  );
};

export default App;
