import React, { useState } from 'react';

function TodoItem({ index, todo, deleteTodo, toggleTodo }) {
    // State untuk mengontrol mode edit
    const [isEditing, setIsEditing] = useState(false);
    // State untuk menyimpan teks yang diedit
    const [editedText, setEditedText] = useState(todo.text);

    // Fungsi untuk mengaktifkan mode edit
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Fungsi untuk menyimpan perubahan teks yang diedit
    const handleSave = () => {
        // Memastikan teks yang diedit tidak kosong sebelum disimpan
        if (editedText.trim() !== '') {
            // Membuat salinan tugas dengan teks yang diedit
            const updatedTodo = { ...todo, text: editedText };
            // Memanggil fungsi toggleTodo untuk memperbarui tugas dengan yang diperbarui
            toggleTodo(index, updatedTodo);
        }
        // Menonaktifkan mode edit setelah penyimpanan selesai
        setIsEditing(false);
    };

    // Fungsi untuk membatalkan mode edit dan mengembalikan teks semula
    const handleCancel = () => {
        setIsEditing(false);
        // Mengembalikan teks yang diedit ke teks asli tugas sebelum diedit
        setEditedText(todo.text);
    };

    return (
        <div className='container col-md-12'>
            <ul className='list-group my-2' >
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    {/* Tampilan berbeda antara mode edit dan mode normal */}
                    {!isEditing ? (
                        <>
                            {/* Teks tugas yang ditampilkan, gaya tampilannya akan berubah jika tugas sudah selesai */}
                            <span
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            >
                                {todo.text}
                            </span>
                            <div>
                                {/* Checkbox untuk menandai tugas sebagai selesai atau belum selesai */}
                                <input
                                    type="checkbox"
                                    className='form-check-input me-2 mt-2'
                                    checked={todo.completed}
                                    // Fungsi untuk mengubah status tugas saat checkbox diubah
                                    onChange={() => toggleTodo(index, { ...todo, completed: !todo.completed })}
                                />
                                {/* Tombol untuk memulai mode edit */}
                                <button className='btn btn-sm btn-primary me-2' onClick={handleEdit}>Edit</button>
                                {/* Tombol untuk menghapus tugas */}
                                <button className='btn btn-sm btn-danger' onClick={() => deleteTodo(index)}>Delete</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Input teks untuk mengedit tugas */}
                            <input
                                className='form-control form-control-sm'
                                type="text"
                                value={editedText}
                                // Fungsi untuk memperbarui teks yang diedit saat input berubah
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                            {/* Tombol untuk menyimpan perubahan */}
                            <div className="btn-group" role="group">
                                <button className="btn btn-success btn-sm mx-2" onClick={handleSave}>Save</button>
                                <button className="btn btn-danger btn-sm" onClick={handleCancel}>Cancel</button>
                            </div>
                        </>
                    )}
                </li>
            </ul>

        </div >
    );
}

export default TodoItem