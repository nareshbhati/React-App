import {useState, useEffect} from 'react';
import axios from 'axios';

const useResource = (resource)=>{
    const [resources,setResources] = useState([]);
    useEffect(()=>{
      //fetchData(resource);
      (async (resource)=>{
        alert('infetchdata');
        const resposnse = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        console.log('resposnse',resposnse);
        setResources(resposnse.data);
      })(resource);
    },[resource])

    return resources;
}

export default useResource;
