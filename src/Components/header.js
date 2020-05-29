import React from "react";

import AddTask from "./addTask"

import ShowList from "./renderList";

import "./styles/header_style.css"


//main component 

class Cabeca extends React.Component{

    constructor(props){
        super(props);
        //get data from local storage. If none, it creates a new array
        this.state = {
            
            tasks : JSON.parse(localStorage.getItem("save_list"))||[]
            
           
        }


        this.storeTask = this.storeTask.bind(this);
        this.saveToStorage = this.saveToStorage.bind(this);
        this.saveFromRemove = this.saveFromRemove.bind(this);
        

        
    
    }

    storeTask(newTask){
        
        let oldArray = this.state.tasks;
       
        oldArray.push(newTask);

        let newArray = oldArray;

        this.setState({tasks: newArray}, () => {
    
        this.saveToStorage();
        });


     

        return (
            <ShowList listToRender={this.state.tasks}/>
    )
        
    }

    //it saves the list of to dos into the local storage.
    saveToStorage(){
       
        
        try{
        
        let c = JSON.stringify(this.state.tasks);
        localStorage.setItem('save_list', c); 
        }
        catch(x){
            console.log(x);
        }
        
     

    }

    saveFromRemove(update_local){
        //store array in string version into a variable
        let b = JSON.stringify(update_local);
        //send it to local storage
        localStorage.setItem('save_list', b); 
        
        this.setState({tasks:update_local})
       

    }



    render(){
        return(
    <div className="header">
        <h1 className="main_title">Raniery's TO DO LIST</h1>

        <br/>

        <h2>Welcome to your list! </h2>

        <br/>
        
        <h2> Here you can see the tasks you have to do and add new things too. Enjoy! 📝</h2>
        
        <AddTask  currentData = {this.state.tasks} localStore={this.storeTask} saveStore ={this.saveToStorage} removeUpdate={this.saveFromRemove}
        
        transfer_data = {this.atualizar}/>
        

      


    </div>
        )}
}

export default Cabeca; 