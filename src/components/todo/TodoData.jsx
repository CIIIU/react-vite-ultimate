/* eslint-disable react/prop-types */
const TodoData = (props) => {
    // console.log("props: ", props)

    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {name ,age , data} = props
    return (
        <div className='todo-data'>
        <div>My name is  {name}</div>
        <div>Learning</div>
        <div>Watching</div>
        <div>
          {JSON.stringify(props.TodoList)}
        </div>
      </div>
    )
    
}

export default TodoData