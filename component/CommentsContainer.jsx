import React from "react";

const commentData = [
  {
    name: "ABC",
    text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
    replies: [],
  },
  {
    name: "ABC",
    text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
    replies: [
      {
        name: "ABC",
        text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
        replies: [],
      },
      {
        name: "ABC",
        text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
        replies: [
          {
            name: "ABC",
            text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
            replies: [],
          },
          {
            name: "ABC",
            text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "ABC",
    text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
    replies: [],
  },
  {
    name: "ABC",
    text: "Lorem ipsum Lorem Lorem ipsum Lorem ",
    replies: [],
  },
];

const Comment = ({data}) => {
    // console.log(data)
    return <div className="flex flex-col bg-gray-100 m-1 mb-4">
        <div className="flex">
            <img className="w-6 h-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"></img>
            <p>{data.name}</p>
        </div>
        <p>{data.text}</p>
    </div>
}

const CommentsContainer = () => {
  return (<div className="p-4">
    <h1 className="text-2xl font-bold">Comments: </h1>

    {commentData.map((comment,index)=>(
        <Comment key={index} data={comment}/>
    ))}
  </div>)
}

export default CommentsContainer;
