import React from "react"

import ShowList from "./renderList"

import "./styles/header_style.css"
class AddTask extends React.Component{

    constructor(props){
        super(props);
       

        let  get_data =  this.props.currentData; 

        this.state = {
           
            activity : get_data,
            what: " ",
           
        }

       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        

    }



    //it adds the new task inputed by the user
    handleSubmit(event) {
       
        
        this.props.localStore(this.state.what);

      
        //erase input field so it can get new input
        this.setState({what:" "})

        
        event.preventDefault();

      }

   handleChange(event){
      this.setState({what:event.target.value})
     
  }

  handleRemove(index){

    //check if it is the item intended to be removed is the last item of the list. If it is the case, update state to new array
    if(this.state.activity.length === 1 && this.state.activity[0] === index){
        this.setState({activity: []}, () =>{
        
        this.props.removeUpdate(this.state.activity);
      });
    }

    //regular remove of any task, but the last one
    else{
       
    let d = this.state.activity.filter(element => element !== index); 
   
    this.setState({activity:d}, ()=>{
     
     this.props.removeUpdate(this.state.activity)});
 

  }
}

    render(){

        

        return(
            <div className="getForm">
            

            <label htmlFor="newTask" > Add a new Task </label>

            <input  className="input_field" type='text'  name="newTask" value={this.state.what} onChange={this.handleChange}></input>
           
            <input className="input_button" type="submit" value="Submit" onClick= {this.handleSubmit}></input>
            

            <ShowList data= {this.state.activity} removeToDo = {this.handleRemove}/>
           
            
         
           
            </div> 
        )   
    }
}

export default AddTask;