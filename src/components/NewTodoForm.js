import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const submitTodo = () => {
    if (task !== '' && category !== '') {
      addTodo(task, category);
      setTask('');
      setCategory('');
    }
  };

  return (
    <div className='mt-5'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            type='text'
            className='form-control'
            onChange={e => setTask(e.target.value)}
            value={task}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Category</label>
          <input
            type='text'
            className='form-control'
            onChange={e => setCategory(e.target.value)}
            value={category}
          />
        </div>
        <button
          type='button'
          className='btn btn-primary mt-3'
          onClick={submitTodo}
        >
          Add New Task
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
