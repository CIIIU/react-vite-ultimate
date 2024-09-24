
import { useState } from "react"

const TodoNew = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const {addNewTodo} = props
    const handleClick = () => {
        console.log("input text is : ", valueInput)
        addNewTodo(valueInput)
      }

    const [valueInput,setValueInput] = useState("")

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    
    return (
        <div className='todo-new'>
        <input type="text" 
        onChange={(event)=> {handleOnChange(event.target.value)}}
        />
        <button
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >ADD</button>
        <div>
            This input text is : {valueInput}
        </div>
      </div>
    )
    
}

export default TodoNew