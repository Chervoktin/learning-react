import React from "react";
import PropTypes from "prop-types";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    boredRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange,deleteFromList }) {
  let classes = [];
  if(todo.completed){
    classes.push('done');
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          style={styles.input}
          checked={todo.completed}
          onChange={()=>onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={()=>deleteFromList(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
