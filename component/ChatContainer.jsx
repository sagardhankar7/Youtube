import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { actionChatAdd } from '../utils/chatSlice'
import { generateRandomName, makeid } from '../utils/helper'

export const ChatContainer = () => {
    const dispatch = useDispatch() 
    const chatMessages = useSelector(store=>store.chat.messages) // Step: 3 // Subscribe to the store
    
    useEffect(()=>{
        const it = setInterval(()=>{
            console.log("API Called")
            dispatch(actionChatAdd({ // Step: 2 Dispatch an action
                name: generateRandomName(),
                message: makeid(20)
            }))
        },2000)

        return ()=>clearInterval(it)
    })

  return (
    <div className='border border-black w-full h-[570px] rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
        {   // Getting from subscribed store
        chatMessages.map(c=>(
            <ChatMessage name={c.name} message={c.message} />
        ))}
        


        
    </div>
  )
}
