import {useState} from 'react';
const App=()=>{
  const [count,setCount]=useState(0);
  const [step,setStep]=useState(1);
  const increase=()=>setCount(count+step);
  const decrease=()=>setCount(count-step>=0? count-step:0);
  const reset=()=>setCount(0);
  return (
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>Counter value: {count}</h2>
      <div>
        <label>Step Value: </label>
        <input
        type="number"
        value={step}
        onChange={(e)=> setStep(Number(e.target.value))}
        style={(styles.input)}
        />
      </div>
      <div>
        <button onClick={increase} style={styles.button}>Increase</button>
        <button onClick={decrease} style={styles.button}>Decrease</button>
        <button onClick={reset} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};
const styles={
  container:{
    textAlign:"center",
    marginTop:"50px",
    fontFamily:"Arial,sans-serif",
  },
  input:{
    marginLeft:"10px",
    padding:"5px",
    fontSize:"16px",
  },
  button:{
    margin:"5px",
    padding:"10px 20px",
    fontSize:"16px",
    cursor:"pointer",
  },
  resetButton:{
    margin:"10px",
    padding:"10px 20px",
    fontSize:"16px",
    cursor:"pointer",
    color:"White",
    backgroundColor:"red",
  },
};
export default App;

link : https://175lab3.netlify.app
