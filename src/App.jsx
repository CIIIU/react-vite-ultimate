import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'

const App = () => {
  const name ="hung";
  const age = 22;
  const data = {
    address: "hanoi",
    country: "Viet Nam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
      name = {name}
      age = {age}
      data = {data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  );
};

export default App;
