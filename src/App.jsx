import React, { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: text });
        setText('');
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => handleToggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
