import React, { useEffect } from 'react';
import Todo from './Components/Todo';
import Favorites from './Components/Favorites';
import TodoList from './Components/TodoList';
import { useState } from 'react';

const getStoredTodo = ( item ) => {
  const storedTodos = localStorage.getItem(item)

  if( storedTodos ){
    return JSON.parse(localStorage.getItem(item))

  } else{
    return []
  }

}

function App() {

  const [ states,setStates ] = useState({
    todos: getStoredTodo('todos'),
    favorites: getStoredTodo('favorites'),
    inputTask: ''
  })

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(states.todos))
  }, [states.todos])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(states.favorites))
  }, [states.favorites])

  const handleDeleteTask = id => {
    const updatedTodos = states.todos.filter((todo) => (todo.id !== id))
    const updatedfavorite = states.favorites.filter((favorite) => (favorite.id !== id))

    setStates({
      ...states,
      todos: updatedTodos,
      favorites: updatedfavorite
    })
}


  return (
    <div className="app">
      <h1 className='title'>To-Do List</h1>
      <div className="container">
      <Todo states={ states } setStates={ setStates } />
      <Favorites states={ states } handleDeleteTask={ handleDeleteTask } />
      <TodoList  states={ states } handleDeleteTask={ handleDeleteTask }/>
      </div>
    </div>
  );
}

export default App;
