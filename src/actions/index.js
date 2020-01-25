//import axios from 'axios';
import jsonplaceholder from '../components/api/jsonPlaceholder';


export const selectSong=(song)=>{
  return{
    type:'SELECTED_SONG',
    payload:song,
  }
}

export const fetchData = ()=>{

  /*const promisse  =  jsonplaceholder.get('/posts');
  console.log('propmise',promisse);
  return{
    type:'FETCH_DATA',
    payload:promisse,
  }
  /*jsonplaceholder.get('/posts')
  .then(response=>console.log(response));*/

  /*axios.get('https://jsonplaceholder.typicode.com/post/')
  .then(response=>console.log(response));*/
  return async (dispatch)=>{
    const response  = await jsonplaceholder.get('/posts');
    console.log('response',response);
    dispatch({type:'FETCH_DATA',payload:response});
  }

}
