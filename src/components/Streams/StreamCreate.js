import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component{



   renderInput=({input,label,className,meta})=>{
    console.log("meta",meta);
    return(
      <div>
        <label>{label}</label>
        <input {...input} className={className} autoComplete="off"/>
        <span style={{color:'red'}}>{this.showError(meta)}</span>
      </div>
    );
  }
  showError=({error, touched})=>{
    if(error && touched)
      return error;

  }


  onSubmit=(formValues)=>{
    console.log("onSubmitformValues",formValues);
    const {match:{params}} = this.props;
      console.log('param==<',params);

  }

  render(){
    console.log("check_props",this.props);
    return(
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        StreamCreate
        <br/><br/><br/>
        CreateId==>
        <Field name="title" component={this.renderInput} label="Title" className="titleClass"/>
        <Field name="description" component={this.renderInput} label="Description" className="DescClass"/>
        <button>Submit</button>
      </form>
    );
  }
}

const validateForm=(formProps)=>{
  console.log("validateForm",formProps);
  let error={};
  if(!formProps.title)
    error.title= "Please enter Title name";
  if(!formProps.description)
     error.description = "Please Enrer Description";
  return error;
}

export default reduxForm({form:'streamForm',validate:validateForm})(StreamCreate);
