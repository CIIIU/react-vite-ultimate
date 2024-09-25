/* eslint-disable no-undef */
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching Youtube" }
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const deleteTodo = (idSelected) => {
    const resultList = todoList.filter((item) => item.id !== idSelected);
    setTodoList(resultList);
  };

  return (
    <>
    <Header/>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length > 0 ? 
        <TodoData 
        todoList={todoList} 
        deleteTodo={deleteTodo}
        />
       : 
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      }
    </div>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;
