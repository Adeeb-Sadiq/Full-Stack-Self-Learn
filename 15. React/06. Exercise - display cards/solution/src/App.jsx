import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    setCards(a) 
  }

  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <>
      <Navbar />
      <div className='p-5 flex gap-7 bg-zinc-300 flex-wrap justify-around'>
        {cards.map((card) => {
          return(
            <div key={card.id} className="card p-4 rounded-xl flex flex-col items-center bg-slate-600 text-white w-2/5 gap-2 text-justify hover:cursor-pointer">
              <div className='text-2xl hover:underline'>UserId: {card.userId}</div>
              <div className='text-3xl hover:underline'>Title: {card.title}</div>
              <div className='text-xl hover:underline'>Description: {card.body}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
