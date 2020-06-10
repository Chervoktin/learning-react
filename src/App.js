import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: true, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function deleteFromList(id) {
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
      }
    }
    if (index > -1) {
      todos.splice(index, 1);
    }
    setTodos(todos.slice());
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        deleteFromList={deleteFromList}
      />
    </div>
  );
}

export default App;
