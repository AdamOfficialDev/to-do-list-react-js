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
        <li>
            {/* Tampilan berbeda antara mode edit dan mode normal */}
            {!isEditing ? (
                <>
                    {/* Checkbox untuk menandai tugas sebagai selesai atau belum selesai */}
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        // Fungsi untuk mengubah status tugas saat checkbox diubah
                        onChange={() => toggleTodo(index, { ...todo, completed: !todo.completed })}
                    />
                    {/* Teks tugas yang ditampilkan, gaya tampilannya akan berubah jika tugas sudah selesai */}
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </span>
                    {/* Tombol untuk memulai mode edit */}
                    <button onClick={handleEdit}>Edit</button>
                    {/* Tombol untuk menghapus tugas */}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </>
            ) : (
                <>
                    {/* Input teks untuk mengedit tugas */}
                    <input
                        type="text"
                        value={editedText}
                        // Fungsi untuk memperbarui teks yang diedit saat input berubah
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    {/* Tombol untuk menyimpan perubahan */}
                    <button onClick={handleSave}>Save</button>
                    {/* Tombol untuk membatalkan mode edit */}
                    <button onClick={handleCancel}>Cancel</button>
                </>
            )}
        </li>
    );
}

export default TodoItem