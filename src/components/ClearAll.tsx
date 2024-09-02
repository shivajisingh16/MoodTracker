import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { clearAllButtonClicked } from '../actionsCreator'

const ClearAll:FC=()=> {
  let dispatch = useDispatch();
  function clearAll(){
    dispatch(clearAllButtonClicked());
  }
  return (
    <button className='bg-indigo-500 px-4 py-8 rounded-md text-white font-bold' onClick={clearAll}>Clear All</button>
  )
}

export default ClearAll