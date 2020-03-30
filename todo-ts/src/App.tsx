import React, { useState } from 'react';
import { TodoList } from './TodoList';
//import { useState } from 'react-dom';
//import { Todo } from./types'; implicit from types.d.ts file

const initialTodos: Array<Todo> = [
  { text: "Go buy cereal", complete: true }, 
  { text: "Practice LC", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo: ToggleTodo = selectedTodo => {
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

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
}

export default App;
