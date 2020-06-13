import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Input from "./Todo/Input";

function App() {
  let [todos, setTodos] = React.useState([
  ]);

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
         
        }
      );
  }, []);

  let [value, setValue] = React.useState("test");

  return (
    <div className="wrapper">
      <Input value={value} setValue={setValue}></Input>
      <button
        onClick={() => {
          let id = 0;
          if (todos2.length !== 0) {
            id = todos2[todos2.length - 1].id;
          }
          todos2.push({ id: id + 1, completed: false, title: value });
          setTodos2(todos2.slice());
        }}
      >
        add
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

export default App;
