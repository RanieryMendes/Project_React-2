import React from "react"

import ShowList from "./renderList"

import "./styles/header_style.css"
class AddTask extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor addtask")

        let  ga =  this.props.currentData; 

        this.state = {
           
            activity : ga,
            what: " ",
           
        }

       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        

    }



    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.what);
       
        
        this.props.localStore(this.state.what);

        console.log("pre function" + this.state.activity);

        this.setState({what:" "})

        
        event.preventDefault();

      }

   handleChange(event){
      this.setState({what:event.target.value})
     
  }

  handleRemove(index){

    if(this.state.activity.length === 1 && this.state.activity[0] === index){
        this.setState({activity: []}, () =>{
        console.log("im in if")
        this.props.removeUpdate(this.state.activity);
        console.log("this is actvity now " + this.state.activity )});
    }

    else{
        console.log("this is activity pre" + this.state.activity)
    let d = this.state.activity.filter(element => element !== index); 
   
    this.setState({activity:d}, ()=>{
     console.log("im in else. this is activity now " + this.state.activity)
     this.props.removeUpdate(this.state.activity)});

     console.log("this is d" + d)
     
   
     


     console.log("atualizar lista pos remove")
     
     

     

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