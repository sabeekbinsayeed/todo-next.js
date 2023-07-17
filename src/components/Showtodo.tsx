"use client"
import { useTodos } from '@/store/todos';
import React from 'react';

const Showtodo = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    let filterTodos = todos
    console.log('showing ', todos)
    return (
        <ul>
            {
                filterTodos.map(todo =>
                    <li key={todo.id}>
                        <input type="checkbox" name="" id={`todo-${todo.id} ch
                        `} checked={todo.completed} onChange={() => {
                                console.log(todo.completed)
                                toggleTodoAsCompleted(todo.id)
                            }
                            } />

                        <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

                        {
                            todo.completed && (
                                <button type="button" >
                                    Delete
                                </button>
                            )
                        }

                    </li>
                )
            }
        </ul>
    );
};

export default Showtodo;