import React from 'react';
import useResource from './useResource';


/*
class component
class ResourceList extends React.Component{
  state = {resource:[]};


  async componentDidUpdate(preProps){
    if(preProps.resource != this.props.resource)
    {
      const resposnse = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      console.log('resposnse',resposnse);
      this.setState({resource:resposnse.data});
    }
  }

  render(){
    return(
      <div>
          {this.state.resource.length}
      </div>
    );
  }
}*/

//function component
const ResourceList  = ({resource})=>{

  const resources = useResource(resource);
  const usersList = useResource('users');
  console.log("userlist",usersList);
  console.log("resources",resources);
    /*const fetchData = async (resource)=>{
      alert('infetchdata');
      const resposnse = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      console.log('resposnse',resposnse);
      setResources(resposnse.data);
  }*/



  return(
    <div>
        <ul>
         Uesrs==>{usersList.map((value)=>{
          return <li key={value.id}>{value.name}</li>
         })}
          resources==>
          {resources.map((value)=>{
            return <li key={value.id}>{value.title}</li>
          })}
        </ul>
    </div>
  );
}

export default ResourceList;
