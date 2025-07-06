import { useState } from 'react'
import './index.css'
import Todos from './components/todos'
import AddTodo from './components/addtodo'

function App() {


  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100'>
        <AddTodo />
        <Todos />
      </div>

    </>
  )
}

export default App
