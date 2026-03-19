import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionCloseMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router'
import CommentsContainer from './CommentsContainer'
import { ChatContainer } from './ChatContainer'

const Watch = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"))

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actionCloseMenu())
    },[])

  return (
    <div className='w-full'>
    <div className='flex'>
        <div className='px-3'>
            <iframe width="1000" height="570" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
            <ChatContainer />
        </div>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default Watch