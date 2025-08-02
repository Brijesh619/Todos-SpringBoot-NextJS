// service/TodoService.java
package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> getAllTodos() {
        return repo.findAll();
    }

    public Todo getTodoById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
    }

    public Todo createTodo(Todo todo) {
        return repo.save(todo);
    }

    public Todo updateTodo(Long id, Todo updated) {
        Todo todo = getTodoById(id);
        todo.setTitle(updated.getTitle());
        todo.setCompleted(updated.isCompleted());
        return repo.save(todo);
    }

    public void deleteTodo(Long id) {
        repo.deleteById(id);
    }
}

