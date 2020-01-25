import React from 'react';

class SearchBar extends React.Component{
  state = {term:''};

  componentWillMount(){
    console.log('in search bar willMount');
  }


  componentDidMount(){
    console.log('in search bar didMount');
  }

  onFormsubmit (ev){
    ev.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.term);
    console.log("after ajax call");
  }
  render(){
    console.log('in Search render');
    return(
      <div className='ui segment'>
          <form className='ui form' onSubmit={(ev)=>this.onFormsubmit(ev)}>
          <div className='field'>
            <label>Search Images</label>
            <input type='text' value={this.state.term} onChange={(ev)=>this.setState({term:ev.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
