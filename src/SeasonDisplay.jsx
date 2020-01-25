import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  'summer':{'text' : 'Lets Heat Beach','iconName':'sun'},
  'winter' : {'text' : 'Its Burr To chill','iconName':'snowflake'}
}

const getSeason = (lat,month)=>{
  if(month>2 && month<9)
  {
    return lat>0 ? 'summer':'winter';
  }else{
    return lat>0 ? 'winter':'summer';
  }

}

const Seasondisplay = (props)=>{
  const Season = getSeason(props.lat,Date().getMonth);
  const {iconName,text} = seasonConfig[Season];
  return  (
    <div className={`season-display ${Season}`}>
        <i className={`${iconName} icon massive display-left`} />
        <h1 className={`text`}>{text}</h1>
        <i className={`${iconName} icon massive display-right`} />
    </div>
  );

}

export default Seasondisplay;
