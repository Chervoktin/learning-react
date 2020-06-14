import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Input from "./Todo/Input";

function App() {
  let [todos, setTodos] = React.useState([]);

  let [todos2, setTodos2] = React.useState([
    { id: 1, completed: false, title: "one" },
    { id: 2, completed: false, title: "too" },
    { id: 3, completed: false, title: "three" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then(
        (result) => {
          setTodos(result);
        },
        // Примечание: Обрабатывать ошибки необходимо именно здесь
        // вместо блока catch(), чтобы не пропустить
        // исключения из реальных ошибок в компонентах.
        (error) => {
          alert("ошибка подключения");
        }
      );
  }, []);

  let [value, setValue] = React.useState("test");
  function index() {
    return (
      <div className="wrapper">
        <Input value={value} setValue={setValue}></Input>
        <button
          onClick={() => {
            let id = 0;
            if (todos.length !== 0) {
              id = todos[todos.length - 1].id;
            }
            todos.push({ id: id + 1, completed: false, title: value });
            setTodos(todos.slice());
          }}
        >
          add
        </button>

        <button
          onClick={() => {
            fetch("http://localhost:3001/")
              .then((res) => res.json())
              .then(
                (result) => {
                  setTodos(result);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {}
              );
          }}
        >
          update
        </button>

        <h1>List 1 </h1>
        <TodoList todos={todos} setTodos={setTodos} />
        <h1>List 2 </h1>
        <TodoList todos={todos2} setTodos={setTodos2} />
        <h1>List 3 </h1>
        <TodoList todos={todos2} setTodos={setTodos2} />
      </div>
    );
  }
  let url = document.location.pathname;
  switch (url) {
    case "/":
    case "/index":
      return index();
      default:
        return <h1>404</h1>
  }
}

export default App;
