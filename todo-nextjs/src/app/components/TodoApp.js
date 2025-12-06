'use client';

import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import styles from './TodoApp.module.css';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    // Load todos from localStorage on mount
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (e) {
                console.error('Failed to parse todos from localStorage', e);
            }
        }
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTodos([newTodo, ...todos]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 11l3 3L22 4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 className={styles.title}>
                        <span className="gradient-text">ToDo</span> List
                    </h1>
                    <p className={styles.subtitle}>Organize your tasks efficiently</p>
                </div>

                {/* Stats */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{activeCount}</span>
                        <span className={styles.statLabel}>Active</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{completedCount}</span>
                        <span className={styles.statLabel}>Completed</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{todos.length}</span>
                        <span className={styles.statLabel}>Total</span>
                    </div>
                </div>

                {/* Input Form */}
                <form onSubmit={addTodo} className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" />
                            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add a new task..."
                            className={styles.input}
                        />
                    </div>
                    <button type="submit" className={styles.addBtn}>
                        Add Task
                    </button>
                </form>

                {/* Filters */}
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'completed' ? styles.active : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                {/* Todo List */}
                <TodoList
                    todos={filteredTodos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />

                {/* Clear Completed Button */}
                {completedCount > 0 && (
                    <button onClick={clearCompleted} className={styles.clearBtn}>
                        Clear Completed ({completedCount})
                    </button>
                )}
            </div>
        </div>
    );
}
