import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {decrement, increment} from "./redux/features/counter/counterSlice"

function App() {
  let {data} = useSelector((state) => state.counter)
  let dispatch = useDispatch()
  
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
