import React from 'react'
import { useReducer } from 'react'
import { useSelector } from 'react-redux'
import reducer from './redux/features/counter/counterSlice'

function App() {
  let data = useSelector((state) => state.counter)

  const [state, dispatch] =useReducer(reducer, {
    value:0,
  })
  return (
    <div>
      <h3>ssa</h3>
    </div>
  )
}

export default App
