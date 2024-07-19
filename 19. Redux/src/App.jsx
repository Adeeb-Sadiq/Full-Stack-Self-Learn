import Navbar from './components/Navbar'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, secondIncrement } from './redux/counter/counterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)
  const second = useSelector(state => state.counter.second)


  return (
    <>
      <Navbar />
      <button onClick={() => dispatch(decrement())}> - </button>
      {count}
      <button onClick={() => dispatch(increment())}> + </button>
      <div onClick={() => dispatch(secondIncrement())}>
        {second}
      </div>
    </>
  )
}

export default App
