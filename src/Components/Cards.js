
import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div className='bg-slate-200 m-5  p-3 text-center w-3/12 h-30'>
        <img className='object-cover w-full h-40' src={props.imageAlt}/>
        <h1 className='text-2xl uppercase font-bold'>{props.title}</h1>
        <p className='text-1xl capitalize'>{props.para}</p>
    </div>
    </>
  )
}

export default Cards
