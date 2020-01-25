import React from 'react';

const myContext= React.createContext();
const Person  = (props)=>{
  return (
      <myContext.Consumer>
        {(context)=>(
          <div>

            <p>Im in Person component {context}</p>

          </div>
        )}
      </myContext.Consumer>
  );
}

export default Person;
