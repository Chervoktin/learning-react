import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  function toggleTodo(id) {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function deleteFromList(id) {
    let index = -1;
    for (let i = 0; i < props.todos.length; i++) {
      if (props.todos[i].id === id) {
        index = i;
      }
    }
    if (index > -1) {
      props.todos.splice(index, 1);
    }
    props.setTodos(props.todos.slice());
    fetch("http://localhost:3000/delete", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: id }),
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
  }

  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={toggleTodo}
            deleteFromList={deleteFromList}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;
