import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={() => handleDelete(todo.id)}
                        handleToggle={() => handleToggle(todo.id)}/>
                ))
            }
        </ul>
    );
};

export default TodoList;
