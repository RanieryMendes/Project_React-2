import React from "react"

import ShowList from "./renderList"
class AddTask extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activity : [],
            what: " "
        }

       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    }



    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.what);
        console.log(this.state.what);
        
        this.props.localStore(this.state.what);

        this.setState.activity = this.state.activity.push(this.state.what); 

        this.setState({what:" "})
        

        event.preventDefault();

      }

   handleChange(event){
      this.setState({what:event.target.value})
     
  }

    render(){
        return(
            <div>
            

            <label htmlFor="newTask" > Add a new Task </label>

            <input type='text'  name="newTask" value={this.state.what} onChange={this.handleChange}></input>
           
            <input type="submit" value="Submit" onClick= {this.handleSubmit}></input>

            <ShowList data= {this.state.activity}>

            </ShowList>
           
         
           
            </div> 
        )   
    }
}

export default AddTask;