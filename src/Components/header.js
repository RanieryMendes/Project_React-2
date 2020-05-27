import React from "react";

import AddTask from "./addTask"

import ShowList from "./renderList";

import "./styles/header_style.css"





class Cabeca extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        this.storeTask = this.storeTask.bind(this);
    
    }

    storeTask(newTask){
        console.log("store function " + newTask)
        let oldArray = this.state.tasks;
        oldArray.push(newTask);
        let newArray = oldArray;
        this.setState.tasks = newArray;
        console.log(this.state.tasks);
        return (
            <ShowList listToRender={this.state.tasks}/>
    )
        
    }


 

    render(){
        return(
    <div className="header">
        <h1 className="main_title">Raniery's TO DO LIST</h1>

        <br/>

        <h2>Welcome to your list! </h2>

        <br/>
        
        <h2> Here you can see the tasks you have to do and add new things too. Enjoy! 📝</h2>
        
        <AddTask  localStore={this.storeTask}/>

      


    </div>
        )}
}

export default Cabeca; 