const ToDoItem = ({todo, removeTodo}) => {
  return (
      <div className="todo-item">
            <p>{todo.val}</p>
            <button onClick={() => removeTodo(todo)}>Remove</button>
      </div>
    
  );
}

export default ToDoItem;