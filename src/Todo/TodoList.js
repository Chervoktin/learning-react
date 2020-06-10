import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  console.log(props.todos);
  return (
    <ul style={styles.ul}>
      {
          props.todos.map((todo,index) =>{
              return <TodoItem 
              todo={todo}
               key = {todo.id} 
               index = {index}
               onChange = {props.onToggle}
               deleteFromList = {props.deleteFromList}
               />
          })
      }
    </ul>
  );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList;