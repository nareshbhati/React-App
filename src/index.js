import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import SeasonDisplay from './SeasonDisplay';

import reducer from './reducers';
import App from './components/App';
//import Faker from 'faker';
//import CommentDetails from './CommentsDetails';
//import ApprovalCard from './Approvalcard';


/*const App = ()=>{
    return (
      <div>
          <div className="ui container comments">
            <ApprovalCard>
              <h2>Warning!</h2>
              <div>Are you sure to contine this ?</div>
            </ApprovalCard>

            <ApprovalCard>
              <CommentDetails
              author='Naresh'
              timeAgo ="Today at 4.00 PM"
              text='Good'
              avtar={Faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
              <CommentDetails
              author ='Bhati'
              timeAgo ="Today at 4.15 PM"
              text="Nice"
              avtar={Faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
              <CommentDetails
              author ='kajal'
              timeAgo ="Today at 4.45 PM"
              text= "Dude"
              avtar={Faker.image.avatar()}/>
            </ApprovalCard>

          </div>
      </div>
    );
}*/

/*const App = ()=>{
  navigator.geolocation.getCurrentPosition(
    (showposition)=>console.log(showposition),
    (error)=>console.log(error)
  );


  return (
    <div>Hi Naresh here showposition=>{JSON.stringify(showposition)}</div>
  );
}*/

/*class App extends React.Component{
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {lat : "3",long:'4',errroMsg:'No error'};
  }

  componentDidMount(){
    console.log('componentDidMount');
    navigator.geolocation.getCurrentPosition(
      (showposition)=>this.setState({lat : showposition.coords.latitude}),
      (error)=>this.setState({errroMsg:error.message}),
    );
  }

  render(){
    console.log('render');
    return (
      <div>
        Hi Naresh here Lat ==>{this.state.lat},long==>{this.state.long}
        <br/>
        Error ==>{this.state.errroMsg}
        <SeasonDisplay lat={this.state.lat}/>
      </div>
    );
  }
}*/
const composeEnhancer =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store=  createStore(reducer,composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
