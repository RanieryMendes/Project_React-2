import React from "react";

import AddTask from "./addTask"

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

    }

    render(){
        return(
    <div>
        <h1>Raniery's TO DO LIST</h1>
        <br/>
        <h2>Welcome to your list. Here you can see the tasks you have to do and add new things too</h2>
        <AddTask  localStore={this.storeTask}/>
    </div>
        )}
}

export default Cabeca; 