import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a todo"
                value={inputValue} // Ensure that inputValue is always defined
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
