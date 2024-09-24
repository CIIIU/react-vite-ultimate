
import './style.css';

const MyComponent = () => {
    // const name ="Hung dep trai"; //string
    // const name =26; //number

    // const name =[1,2,3]; //array
    const name ={
        name: "hung dep trai",
        age: 22
    }

    return(
        <>
      <div>{JSON.stringify(name)} @ react</div>

      <div>{console.log("hung")}</div>
      <div className="halo"
            style={{borderRadius: "10px"}}
      > HALO</div>
      </>
    );
  }
  export default MyComponent