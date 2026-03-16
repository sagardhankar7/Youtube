import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionCloseMenu } from '../utils/appSlice'

const Watch = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actionCloseMenu())
    },[])

  return (
    <div>Watch</div>
  )
}

export default Watch