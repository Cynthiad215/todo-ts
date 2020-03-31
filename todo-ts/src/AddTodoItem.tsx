import React,{ useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoItemProps {
    addTodo: AddTodo;
}
 
export const AddTodoItem: React.FC<AddTodoItemProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form className="form-inline my-5">
            <div className="form-group">
                <input className="form-control" type="text" value={newTodo} onChange={handleChange}/>
                <button className="btn btn-primary mx-2" type="submit" onClick={handleSubmit} >Add</button>
            </div>
        </form>
    );
};
