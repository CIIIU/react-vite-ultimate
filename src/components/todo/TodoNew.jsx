import { useState } from "react"

// eslint-disable-next-line no-unused-vars
const TodoNew = (props) => {
    // console.log(">>>check point : ", props)
    //  addNewTodo("hung dep trai")
    const handleClick = () => {
        console.log("input text is : ", valueInput)
      }

    // const valueInput = "hung";
    const [valueInput,setValueInput] = useState("hugn")


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