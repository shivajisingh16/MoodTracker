import React,{FC, memo, useState} from 'react'
import { sadButtonClicked } from '../actionsCreator';
import { useDispatch } from 'react-redux';
import Button from './Button';

const  SadIncrementor:FC=()=> {
  let [count,setCount]= useState(0);
  const dispatch = useDispatch();
  function decrement(){
    if(count>0){
      dispatch(sadButtonClicked(count,new Date()));
    }
    setCount(0);
  }
  return (
    <div>
      <h3 className='text-white font-bold my-2'>Are you sad?</h3>
      <input className='w-28 rounded-md px-3 py-2 mr-3' type="number" value={count} onChange={(e)=>setCount(+e.target.value)} />
      <Button type="no" onClick={decrement} >No</Button>
    </div>
  )
}

export default memo(SadIncrementor)