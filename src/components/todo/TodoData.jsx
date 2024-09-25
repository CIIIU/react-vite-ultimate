/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const TodoData = (props) => {
  const {todoList, deleteTodo} = props;
  const handleClick = (id) =>{
    deleteTodo(id)
  }
    return (
        <div className='todo-data'>
          {todoList.map((item, index) => {
            console.log(">>>check map :", item, index)
            return(
              <div className={`todo-item`}  key={item.id}>
                <div>{item.name}</div>
                <button 
                onClick={() => handleClick(item.id)}
                style={{cursor: "pointer"}}
                >DELETE</button>
              </div>
            )
          }  )}
        
      </div>
    )
    
}

export default TodoData