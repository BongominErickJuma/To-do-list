import React from 'react'

const TodoList = ({ states, handleDeleteTask }) => {

  return (
    <div className='allTodos'>
      <h2>All Tasks</h2>
        {
          states.todos.map((todo) => (
            <div className="item" key={todo.id}>
              <span>{todo.text}</span>
              <button 
              onClick={(e) => handleDeleteTask(todo.id)}>
                <abbr title="remove">
                <i className="material-icons">delete</i>
                </abbr>
              </button>
            </div>
          ))
        }
    </div>
  )
}

export default TodoList
