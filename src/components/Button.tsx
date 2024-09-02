import React, { FC } from 'react'

type ButtonProps={
  onClick:()=>void;
  children:React.ReactNode;
  type?:String;
}
const Button:FC<ButtonProps>=({type,...rest})=> {
  let bgColor;
 if(type==="yes"){
  bgColor='bg-green-500'
 }
 else{
   bgColor='bg-red-500'
 }
  return (
    <button {...rest}   className={`${bgColor} px-5 py-2 font-bold text-white rounded-md`}></button>
  )
}
Button.defaultProps={
  type:"yes",
}

export default Button