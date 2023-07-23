import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // State untuk menyimpan daftar tugas
  const [todos, setTodos] = useState([]);
  // State untuk menyimpan nilai input teks
  const [inputValue, setInputValue] = useState('');

  // Fungsi untuk menambahkan tugas baru ke dalam daftar
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Fungsi untuk menghapus tugas dari daftar berdasarkan indeksnya
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Fungsi untuk mengubah status selesai/belum selesai tugas berdasarkan indeksnya
  // dan menyimpan perubahan tugas yang diperbarui
  const toggleTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        {/* Input teks untuk menambahkan tugas baru */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* Tombol untuk menambahkan tugas baru */}
        <button onClick={addTodo}>Add</button>
      </div>
      {/* Perbarui properti "todos" dan fungsi "toggleTodo" yang diteruskan ke TodoList */}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App

