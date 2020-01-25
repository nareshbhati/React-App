import React from 'react';
import {fetchData} from '../actions';
import {connect} from 'react-redux';

class PostList extends React.Component {

  componnentWillMount(){

  }

  componentDidMount(){
    console.log("before api call");
    this.props.fetchData();
    console.log("after api call");
  }

  render(){
    return(
      <div>IN Post List</div>
    );
  }
}

export default connect(null,{fetchData})(PostList);
