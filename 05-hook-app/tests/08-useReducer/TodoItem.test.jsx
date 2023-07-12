import {fireEvent, render, screen} from '@testing-library/react';
import {TodoItem} from '../../src/08-useReducer/TodoItem.jsx';

describe('Test <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Soul stone',
        done: false
    };

    const mockOnDeleteTodo = jest.fn();
    const mockOnToggleTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should render the pending todo', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('Should render the todo completed', () => {
        todo.done = true;

        render(<TodoItem
            todo={todo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('Should call to ToggleTodo on click', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(mockOnToggleTodo).toHaveBeenCalledWith(todo.id);
    });

    test('Should call to DeleteTodo on click', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(mockOnDeleteTodo).toHaveBeenCalledWith(todo.id);
    });
});