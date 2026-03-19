import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

export const ChatContainer = () => {
    useEffect(()=>{
        const it = setInterval(()=>{
            console.log("API Called")
        },2000)

        return ()=>clearInterval(it)
    })

  return (
    <div className='border border-black w-full h-[570px] rounded-lg bg-gray-100'>
        <ChatMessage name="Sagar" message="This is a sample message." />


        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
        <ChatMessage name="Sagar" message="This is a sample message." />
    </div>
  )
}
