import React from 'react'

const Todo = ({ states, setStates }) => {

    const handleAddTask = () => {
        if( states.inputTask.trim() === '' ) return;

        const newTodo = {
            id: Date.now(),
            text: states.inputTask
        }

        setStates({
            ...states,
            todos: [ ...states.todos, newTodo ],
            inputTask: ''
        })

    }

    const handleAddFavorite = () => {
        if( states.inputTask.trim() === '' ) return;

      const newFavorite = {
          id: Date.now(),
          text: states.inputTask
      }

      setStates({
        ...states,
        favorites: [ ...states.favorites, newFavorite ],
        inputTask: ''
    })
  }


  const handleInputKeyDownPress = event => {
    if( states.inputTask.trim() === '' ) return;
    if (event.ctrlKey && (event.key === 'Enter')){

        const newFavorite = {
            id: Date.now(),
            text: states.inputTask
        }
  
        setStates({
          ...states,
          favorites: [ ...states.favorites, newFavorite ],
          inputTask: ''
      })
    } else if (event.key === 'Enter') {
        const newTodo = {
            id: Date.now(),
            text: states.inputTask
        }

        setStates({
            ...states,
            todos: [ ...states.todos, newTodo ],
            inputTask: ''
        })
    } 
  }


  return (
    <div className='todos'>
        <h2>Add Task</h2>
        <div className="inputContainer">
            <input
            autoFocus={ true }
            name='task-input'
            type="text"
            value={states.inputTask}
            onChange={ e => setStates({ ...states, inputTask: e.target.value })}
            onKeyDown={ handleInputKeyDownPress }
             />
             <button 
             className=" btn inputBtn" onClick={handleAddTask}>
                <abbr title="click here or press enter to add task">
                    <i className="material-icons">add</i>
                </abbr>
            </button>
             <button 
             className='btn' onClick={handleAddFavorite}>
                <abbr title="click here or press ctrl + enter to add favorite ">
                    <i className="material-icons">star_outline</i>
                </abbr>
            </button>
        </div>        
    </div>
  )
}

export default Todo

