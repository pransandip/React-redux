import './App.css';
import { useState } from 'react';

function ChangeDate() {

  const [date, onChange] = useState(new Date());
  const [intvl, setintvl] = useState();

  const handelChange = () => {
    let interval = setInterval(() => {
      onChange(new Date())
    }, 1000)
    setintvl(interval);
  }

  return (
    <div className="App">
         <h1>{date.toLocaleTimeString()}</h1>
         <button style={{ width: '100px', hight: '20px', background: 'skyblue', cursor: 'pointer' }} onClick={handelChange}>start</button>
         <button style={{ width: '100px', hight: '20px', background: 'skyblue', cursor: 'pointer' }} onClick={() => clearInterval(intvl)}>stop</button>
    </div>
  );
}

export default ChangeDate;