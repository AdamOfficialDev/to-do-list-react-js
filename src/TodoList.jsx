import React from 'react';
import TodoItem from './TodoItem';

// Komponen untuk menampilkan daftar tugas
function TodoList({ todos, deleteTodo, toggleTodo }) {
    // Mengembalikan elemen JSX berupa daftar tugas
    return (
        <ul>
            {/* Looping melalui setiap tugas di "todos" untuk membuat elemen TodoItem */}
            {todos.map((todo, index) => (
                // Memanggil komponen TodoItem dan meneruskan tugas, indeks, serta fungsi "deleteTodo" dan "toggleTodo" sebagai prop
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList