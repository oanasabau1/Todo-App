import React from 'react';
import PropTypes from 'prop-types';
import TodoRowItem from './TodoRowItem';

function TodoTable({ todos, deleteTodo }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowTask={todo.rowTask}
            rowCategory={todo.rowCategory}
            deleteTodo={deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      rowNumber: PropTypes.number.isRequired,
      rowTask: PropTypes.string.isRequired,
      rowCategory: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoTable;
