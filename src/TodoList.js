import React, { useState } from 'react';


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('')

function handleInputChange(event) {
    setInputValue(event.target.value);
}

function handleSubmit() {
    if (inputValue.trim()) {
        setTodos([...todos, inputValue.trim()]);
        setInputValue('');
    }
}

function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
}

function handleEdit (index) {

    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
	    let updatedTodos = [...todos]
	    updatedTodos[index] = editedTodo
	    setTodos(updatedTodos);
	}
}

return (
<div>

<input type="text" value={inputValue} onChange={handleInputChange} />
<button onClick={handleSubmit}>Add Your Order Name</button>

<ul>
 {todos.map((todo, index) => (
 <li key={index}>
 {todo}
 	<button onClick={() => handleDelete(index)}>Delete</button>
	<button onClick={() => handleEdit(index)}>Edit</button>
 </li>
 ))}
</ul>

</div>
);
}
export default TodoList;