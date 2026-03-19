import React from 'react'

// receiving name and message (in prop)
const ChatItems = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img className="w-10 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"></img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatItems