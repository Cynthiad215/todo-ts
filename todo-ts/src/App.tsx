import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoItem } from './AddTodoItem';
import "./styles.css";
//import { Todo } from./types'; implicit from types.d.ts file

const initialTodos: Array<Todo> = [
  { text: "Go buy cereal", complete: true }, 
  { text: "Practice LC", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo: ToggleTodo = selectedTodo => {
    console.log(selectedTodo);
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  }
  
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="p-3 border bg-light">To-Do List</h2>
        <AddTodoItem addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </React.Fragment>
  );
}

export default App;
