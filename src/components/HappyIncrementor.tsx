import React, { FC, memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { happyButtonClicked } from '../actionsCreator';
import Button from './Button';

const HappyIncrementor:FC=()=> {
  let [count,setCount] =useState(0);
  const dispatch = useDispatch();
  function increment(){
    if(count>0){
      dispatch(happyButtonClicked(count,new Date()));
    }
    
    setCount(0);
  }
  return (
    <div>
      <h3 className='text-white font-bold my-2'>Are you happy?</h3>
      <input className='w-28 rounded-md px-3 py-2 mr-3'  type="number" value={count} onChange={(e)=>setCount(+e.target.value)} />
      <Button onClick={increment} >Yes</Button>
    </div>
  )
}

export default memo(HappyIncrementor)