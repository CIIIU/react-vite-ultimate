/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const TodoData = (props) => {
  const {todoList} = props;
  console.log(">>> check props: ", todoList);
    return (
        <div className='todo-data'>
          {todoList.map((item, index) => {
            console.log(">>>check map :", item, index)
            return(
              <div className="todo-item">
                <div>{item.name}</div>
                <button>DELETE</button>
              </div>
            )
          }  )}
        <div>
          {/* {JSON.stringify(props.todoList)} */}
        </div>
      </div>
    )
    
}

export default TodoData