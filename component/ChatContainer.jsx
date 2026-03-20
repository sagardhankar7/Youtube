import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { actionChatAdd } from '../utils/chatSlice'

export const ChatContainer = () => {
    const dispatch = useDispatch() 
    const chatMessages = useSelector(store=>store.chat.messages) // Step: 3 // Subscribe to the store
    
    useEffect(()=>{
        const it = setInterval(()=>{
            console.log("API Called")
            dispatch(actionChatAdd({ // Step: 2 Dispatch an action
                name: "Sagar Dhannkar",
                message: "Message from Dispatching action"
            }))
        },2000)

        return ()=>clearInterval(it)
    })

  return (
    <div className='border border-black w-full h-[570px] rounded-lg bg-gray-100 overflow-y-scroll'>
        {   // Getting from subscribed store
        chatMessages.map(c=>(
            <ChatMessage name={c.name} message={c.message} />
        ))}
        


        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
    </div>
  )
}
