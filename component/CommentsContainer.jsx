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

const CommentList = ({commentData}) => {
    return commentData.map((comment,index)=>(
        <div key={index}>
            <Comment data={comment}/>
            <div className="pl-4 border-l-2 border-black ml-2">
                <Comment data={comment} />
                <Comment data={comment} />
            </div>
        </div>
    ))
    
}

const CommentsContainer = () => {
  return (<div className="p-4">
    <h1 className="text-2xl font-bold">Comments: </h1>

    <CommentList commentData={commentData}/>
  </div>)
}

export default CommentsContainer;
