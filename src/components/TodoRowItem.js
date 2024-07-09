import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoRowItem = React.memo(function TodoRowItem({ rowNumber, rowTask, rowCategory, deleteTodo }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(rowNumber);
    }, 1000); 
  };

  return (
    <tr className={isDeleting ? 'strike-and-fade' : ''} onClick={handleDelete}>
      <th scope='row'>{rowNumber}</th>
      <td>{rowTask}</td>
      <td>{rowCategory}</td>
    </tr>
  );
});

TodoRowItem.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  rowTask: PropTypes.string.isRequired,
  rowCategory: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoRowItem;
