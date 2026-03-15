import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails, publishedAt} = snippet
    const {viewCount} = statistics
    const dateTime = publishedAt.replace("T", " ").replace(/:\d{2}Z$/, "");


  return (
    <div className='w-48 bg-gray-100 shadow-lg rounded-lg mr-8 mb-5 p-3'>
        {/* <img className='w-44 h-44 rounded-full object-cover' src={thumbnails.medium.url}></img> */}
        <img className='w-44 h-44 rounded-full object-cover' src="https://placehold.co/400"></img>
        <ul>
            <li className='truncate w-44'>{title}</li>
            <li>{channelTitle}</li>
            <li>{dateTime}</li>
        </ul>
    </div>
  )
}

export default VideoCard