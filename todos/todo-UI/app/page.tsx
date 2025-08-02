"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get<Todo[]>("http://localhost:8080/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    await axios.post("http://localhost:8080/api/todos", {
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
    fetchTodos();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/api/todos/${id}`);
    fetchTodos();
  };

  const handleToggle = async (todo: Todo) => {
    await axios.put(`http://localhost:8080/api/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleUpdateTitle = async (id: number) => {
    if (!editTitle.trim()) return;
    await axios.put(`http://localhost:8080/api/todos/${id}`, {
      title: editTitle,
    });
    setEditId(null);
    setEditTitle("");
    fetchTodos();
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>TODO List</h1>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ flex: 1, padding: "0.5rem", border: "1px solid #ccc" }}
        />
        <button onClick={handleAddTodo} style={{ padding: "0.5rem 1rem", background: "#2563eb", color: "white", border: "none" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ flex: 1, padding: "0.3rem", marginRight: "0.5rem" }}
                />
                <button onClick={() => handleUpdateTitle(todo.id)} style={{ marginRight: "0.5rem", color: "blue", border: "none", background: "none" }}>
                  Save
                </button>
                <button onClick={() => setEditId(null)} style={{ color: "gray", border: "none", background: "none" }}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none", flex: 1 }}>{todo.title}</span>
                <button onClick={() => handleToggle(todo)} style={{ marginRight: "0.5rem", color: "green", border: "none", background: "none" }}>
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => handleEdit(todo)} style={{ marginRight: "0.5rem", color: "orange", border: "none", background: "none" }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)} style={{ color: "red", border: "none", background: "none" }}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
