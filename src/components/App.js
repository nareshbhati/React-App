import React from 'react';

import MyProvider from './Provider';
import Family from './Family';



/*import {BrowserRouter,Route,Link} from 'react-router-dom';

import Headers from './Header';
import StreamList from './Streams/SreamList';
import StreamCreate from './Streams/StreamCreate';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import SongList from './SongsList';
import SongDetails from './SongDetails';
import Hook from './Hook';*/
//import unplash from '../api/unplash';
//import SearchBar from './SearchBar';
//import ImagesList from './ImagesList';

//import PostList from './PostList';

/*class  App extends React.Component {

  state = {images:[]};

  componentWillMount(){
    console.log('in app Will Mount');
  }

  componentDidMount(){
    console.log('in app Did Mount');
  }

  /*onSearchSubmitOld(term) {
    axios.get('https://api.unsplash.com/search/photos/',{
      params:{
        'query':term,
      },
      headers:{
        Authorization: 'Client-ID 17de8550b485ec7a06cbd0d0a87faf300010828af630c304c2b48d4c41c29f5e'
      },
    }).then((response)=>{
      console.log(response.data.results);
    }).catch((error)=>{
      console.log('error',error);
    });
  }*/


  /*onSearchSubmit = async (term) =>{
    console.log('before api call');
    const response  = await unplash('https://api.unsplash.com/search/photos/',{
      params:{
        'query':term,
      },
    });
    console.log('response',response.data.results);
    this.setState({images:response.data.results});
  }

  render(){
    console.log('in App render');
    return(
      <div className='ui container' style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        count=>{this.state.images.length}
        <ImagesList images={this.state.images}/>
      </div>
    );
  }
}*/

/*const App=  ()=>{
  return(
    <div>
        <PostList/>
    </div>
  );
}*/

/*const myName = 'naresh';

const PageOne = ()=>{
  return(
    <div>
      I m in page 1 {myName}
      <Link to="/page2">Click here To go in page2</Link>
    </div>
  );
}

const page2 = ()=>{
  return(
    <div>
        Im m in page2
        <Link to="/">Click here to go in page 1</Link>
    </div>
  );
}

const App = ()=>{
  return (
    <div>
        <SongList/>
        <SongDetails/>
        <Hook/>
        <BrowserRouter>
           <Headers/>
           <Route path='/'  exact component={StreamList} />
           <Route path='/Stream/Create/:Creatid'  exact component={StreamCreate} />
           <Route path='/Stream/Show'  exact component={StreamShow} />
           <Route path='/Stream/Edit'  exact component={StreamEdit} />
           <Route path='/Stream/Delete'  exact component={StreamDelete} />
        </BrowserRouter>
    </div>
  );
}*/



class App extends React.Component {

  render(){
    return(
      <MyProvider value='naresh bhati ka jalva'>
        <div>
          Hi I m Parent
          <Family />
        </div>
      </MyProvider>
    );
  }

}

export default App;
