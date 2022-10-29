import { useState } from 'react'
import './App.css'

const ReducerEx = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>{count}</h1>
      {/* --count && --count or count++ && count-- or count = count - 1 if we use this it will show :- Uncaught TypeError: Assignment to constant variable. */}
      <button style={{ width: '100px', hight: '50px', background: 'skyblue', cursor: 'pointer' }} onClick={() => setCount(count + 1)}>+</button>
      <span> </span>
      <button style={{ width: '100px', hight: '50px', background: 'skyblue', cursor: 'pointer' }} onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default ReducerEx