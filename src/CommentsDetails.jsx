import React from 'react';

const CommentDetails = (props)=>{
  console.log(props);
  return(
    <div className="comment">
      <a href='/' className='avtar'>
        <img alt='avtar' src={props.avtar}/>
      </a>
      <div className='content'>
        <a href='/' className='author'>{props.author}</a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.text}</div>

      </div>
    </div>

  );
}

export default CommentDetails;
