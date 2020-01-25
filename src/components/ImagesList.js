import React from 'react';

const ImagesList = (props)=>{
  return(
    <div>

        {props.images.map(({id,description,urls})=>{
          return <div key={id}><img  src={urls.thumb} alt={description}/></div>
        })}
    </div>
  );
}

export default ImagesList;
