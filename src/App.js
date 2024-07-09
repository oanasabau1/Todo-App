import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
import React, { useState } from 'react';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowTask: 'Feed kittens', rowCategory: 'Pets' },
    { rowNumber: 2, rowTask: 'Water the bonsai', rowCategory: 'Plants' },
    { rowNumber: 3, rowTask: 'Make lunch', rowCategory: 'Cooking' }
  ]);

  const addTodo = (task, category) => {
    let rowNumber = todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1;
    const newTodo = { rowNumber, rowTask: task, rowCategory: category };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber);
    setTodos(filtered);
  };

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className='card-header'>
          Today's Agenda
        </div>
        <div className='card-body'>
          {todos.length === 0 ? (
            <div className="text-center"> 
              <h2>You're done for today!</h2>
              <button onClick={() => setShowAddTodoForm(true)} className="btn btn-primary">
                Add Task
              </button>
            </div>
          ) : (
            <>
              <TodoTable todos={todos} deleteTodo={deleteTodo} />
              <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">
                {showAddTodoForm ? 'Close New Task' : 'Add Task'}
              </button>
            </>
          )}
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
