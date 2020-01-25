import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song})=>{
  console.log('song',song);
  if(!song)
   return <div>Select song</div>
  return(
    <div>
      Title: {song.title}<br/>
      Duration: {song.duration}
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    song:state.selectedSong,
  }
}

export default connect(mapStateToProps)(SongDetails);
