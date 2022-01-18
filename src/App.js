import Button from "./button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = ()=>setValue((prev) => prev +1);
  const [keyword,setKetword] = useState("");
  const onChange = (event) => setKetword(event.target.value);  
  return (
    <div>
      <input 
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search hear..."></input>
      <h1 className={styles.title}>
        {counter}
      </h1>
      <button onClick={onClick}> click me </button>
    </div>
  );
}

export default App;
