import React from 'react';
import {connect } from 'react-redux';

import {selectSong} from '../actions';


class SongsList extends React.Component{
  renderList(){
    return this.props.songs.map((song)=>{
      return(
        <div key={song.title}>
        <span style={{width:'200x'}}>{song.title}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='button' value='Select' onClick={()=>this.props.selectSong(song)}/>
        </div>
      );
    })
  }

  componentDidMount(){
    console.log("componentDidMount in songlist");
  }

  static getDerviedStateFromProps(){
    console.log("getDerviedStateFromProps in songlist");
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate in songlist");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate in songlist");
  }


  render(){
    console.log("render in songlist");
    return(
      <div>
          {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log('state',state);
  return {
    songs:state.songs,
  };
}

export default connect(mapStateToProps,{selectSong})(SongsList);
