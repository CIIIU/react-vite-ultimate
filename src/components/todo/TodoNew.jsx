const TodoNew = (props) => {
    console.log(">>>check point : ", props)

    // eslint-disable-next-line react/prop-types

    //  addNewTodo("hung dep trai")

    return (
        <div className='todo-new'>
        <input type="text" />
        <button>ADD</button>
      </div>
    )
    
}

export default TodoNew