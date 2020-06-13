import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  let [todos, setTodos] = React.useState( [
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: true, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);
  
  let [todos2, setTodos2] = React.useState( [
    { id: 1, completed: false, title: "one" },
    { id: 2, completed: false, title: "too" },
    { id: 3, completed: false, title: "three" },
  ]);

  return (
    <div className="wrapper">
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
