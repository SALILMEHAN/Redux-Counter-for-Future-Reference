import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Buttons() {

  const [curr, setcurr] = useState();

  const dispatch=useDispatch();

  const handleIncrement=()=>{
    dispatch({type:'INCREMENT'});
  }

  const handleDecrement=()=>{
    dispatch({type:'DECREMENT'});
  }

  const handleAdd=()=>{
    dispatch({type:'ADD', payload:curr});
    setcurr('');
  }

  const handleSub=()=>{
    dispatch({type:'SUB', payload:curr});
    setcurr('');
  }

  const handlePrivacy=()=>{
    dispatch({type:'PRIVACY'});
  }

  return (
    <div className="d-flex gap-2 justify-content-center py-5">
        <div className='px-3'>
            <button className="btn btn-success rounded-pill px-3" type="button" onClick={handleIncrement}>+1</button>
            <button className="btn btn-danger rounded-pill px-3" type="button" onClick={handleDecrement}>-1</button>
            <button className="btn btn-warning rounded-pill px-3" type="button" onClick={handleAdd}>ADD</button>
            <button className="btn btn-info rounded-pill px-3" type="button" onClick={handleSub}>SUBTRACT</button>
            <button className="btn btn-primary rounded-pill px-3" type="button" onClick={handlePrivacy}>PRIVACY</button>
        </div>
        <input type='number' onChange={(e)=>setcurr(e.target.value)} value={curr}/>
    </div>
  )
}

export default Buttons