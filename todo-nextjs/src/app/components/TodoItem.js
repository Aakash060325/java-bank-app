'use client';

import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
            <div className={styles.todoContent}>
                <button
                    className={styles.checkbox}
                    onClick={() => onToggle(todo.id)}
                    aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                    {todo.completed && (
                        <svg
                            className={styles.checkIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
                <span className={styles.todoText}>{todo.text}</span>
            </div>
            <button
                className={styles.deleteBtn}
                onClick={() => onDelete(todo.id)}
                aria-label="Delete task"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="11" x2="10" y2="17" strokeWidth="2" strokeLinecap="round" />
                    <line x1="14" y1="11" x2="14" y2="17" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    );
}
