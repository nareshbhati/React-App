import React from 'react';

const myContext= React.createContext();
console.dir(myContext);
console.log(myContext);
class MyProvider extends React.Component{
  state = {
    name :'naresh',
    surname:'bhati',
  }
  render(){
    return(
      <myContext.Provider value='naresh bhati ka jalva' >
        {this.props.children}
      </myContext.Provider>
    );
  }
}

export default MyProvider;
