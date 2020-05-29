import React from "react";

import AddTask from "./addTask"

import ShowList from "./renderList";

import "./styles/header_style.css"



class Cabeca extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            tasks : JSON.parse(localStorage.getItem("save_list"))||[]
            
           
        }

        /*let b = JSON.parse(localStorage.getItem('save_list'));
       console.log("b " +b )
        this.setState.tasks= b
        */
        console.log("im in the constructor")

        

        this.storeTask = this.storeTask.bind(this);
        this.saveToStorage = this.saveToStorage.bind(this);
        this.saveFromRemove = this.saveFromRemove.bind(this);
        this.atualizar = this.atualizar.bind(this);

        
    
    }

    storeTask(newTask){
        console.log("store function " + newTask)
        let oldArray = this.state.tasks;
        console.log("old array: " + oldArray)
        oldArray.push(newTask);
        let newArray = oldArray;
        this.setState({tasks: newArray}, () => {
        console.log(this.state.tasks + "  CALLING NOW localStorage");
        this.saveToStorage();
        });


     

        return (
            <ShowList listToRender={this.state.tasks}/>
    )
        
    }

    saveToStorage(){
       
        console.log("Save to storage called. The state task is: " + this.state.tasks);
        try{
        console.log("try scope")
        let c = JSON.stringify(this.state.tasks);
        localStorage.setItem('save_list', c); 
        }
        catch(x){
            console.log(x);
        }
        
     

    }

    saveFromRemove(update_local){
        let b = JSON.stringify(update_local);
        localStorage.setItem('save_list', b); 
        this.setState({tasks:update_local})
       

    }

    atualizar(lista_todo){
        this.setState({tasks: lista_todo});
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