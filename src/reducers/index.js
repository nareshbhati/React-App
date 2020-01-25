import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const songsReducer  = ()=>{
  return[
    {title:'Hum Sath Sath Hai' ,duration:'02:30'},
    {title:'Koi Mil Gaya' ,duration:'02:45'},
    {title:'Hum hai Rai Payar Ke' ,duration:'01:30'},
    {title:'DilJale' ,duration:'01:30'},
  ];
}


const selectedSongReducer = (selctedSong='',action)=>{
  if(action.type==='SELECTED_SONG')
    return action.payload;
  return   selctedSong;
}

export default combineReducers({
  songs:songsReducer,
  selectedSong:selectedSongReducer,
  form:formReducer,
});
