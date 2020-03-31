import React from 'react';
//import { Todo } from './types'; implicit with the types.d.ts file

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined} >
                <input
                    className="form-check-input" 
                    type="checkbox" 
                    checked={todo.complete} 
                    onChange={() => toggleTodo(todo)} 
                />
                {todo.text}
            </label>
        </li>
    );
};