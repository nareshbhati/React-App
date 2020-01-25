import React from 'react';
import {Link}  from 'react-router-dom';

const Headers = ()=>{
  return(
    <div>
        <div style={{float:'left'}}>
          <Link to="/">Streamers</Link>
        </div>
        <div style={{float:'right'}}>
          <Link to="/">Streams</Link>
        </div>
    </div>
  );
}

export default Headers;
