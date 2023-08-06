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
    <div className='container mt-3 col-5'>
      <h3 className="text-center my-3 fw-bold fst-italic text-light">To-Do List</h3>
      {/* <hr /> */}
      <div>
        {/* Input tugas baru */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Input your task..." value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
          {/* Button tambah tugas */}
          <button className="btn btn-secondary" type="button" id="button-addon2" onClick={addTodo}><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      {/* Perbarui properti "todos" dan fungsi "toggleTodo" yang diteruskan ke TodoList */}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;