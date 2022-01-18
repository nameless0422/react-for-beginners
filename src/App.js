import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => {
      const newArr = [toDo,...currentArray]
      console.log(newArr);
      return newArr;
    });
    setToDo("");
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Write your to do"
          onChange={onChange}
          value={toDo}
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {
          toDos.map((item, index) => { 
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
