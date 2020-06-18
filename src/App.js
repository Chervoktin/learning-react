import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Input from "./Todo/Input";

function App() {
  let [todos, setTodos] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/update")
      .then((res) => res.json())
      .then(
        (result) => {
          setTodos(result);
        },
        // Примечание: Обрабатывать ошибки необходимо именно здесь
        // вместо блока catch(), чтобы не пропустить
        // исключения из реальных ошибок в компонентах.
        (error) => {
          alert(error);
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
            let todo = { id: id + 1, completed: false, title: value };
            todos.push(todo);
            setTodos(todos.slice());
            fetch("http://localhost:3000/add", {
              method: "post",
              headers: {
                'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify(todo),
            })
              .then((res) => res.json())
              .then(
                (result) => {
                  console.log(result);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {
                  alert(error);
                }
              );
          }}
        >
          add
        </button>

        <button
          onClick={() => {
            fetch("http://localhost:3000/update")
              .then((res) => res.json())
              .then(
                (result) => {
                  setTodos(result);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {
                  alert(error);
                }
              );
          }}
        >
          update
        </button>

        <h1>List 1 </h1>
        <TodoList todos={todos} setTodos={setTodos} />
      
      </div>
    );
  }
  let url = document.location.pathname;
  switch (url) {
    case "/":
    case "/index":
      return index();
    default:
      return <h1>404</h1>;
  }
}

export default App;
