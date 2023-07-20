import {useState} from 'react';
import {useGetTodoQuery} from './store/apis';

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    const {data: todo = [], isLoading} = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const prexTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>Todos - RKT Query</h1>
            <hr/>
            <h4>isLoading: {isLoading ? 'True' : ' False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prexTodo}>
                Prev
            </button>
            <button onClick={nextTodo}>
                Next
            </button>
        </>
    );
}