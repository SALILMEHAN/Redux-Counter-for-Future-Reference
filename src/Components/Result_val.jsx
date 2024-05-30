import React from 'react'
import { useSelector } from 'react-redux'

function Result_val() {

  const counter = useSelector((store)=>store.counter) 
  const privacy=useSelector((store)=>store.privacy)

  return (
    <div className='font-extrabold'>{privacy? <p>PRIVATE</p> : <p>The Current Value Of Counter Is: {counter}</p>}</div>
  )
}

export default Result_val