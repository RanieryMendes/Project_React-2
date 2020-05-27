import React from "react";

import "./styles/header_style.css"

class ShowList extends React.Component{

//define component to render the list
constructor(props){
    super(props);
    this.state = {
        listArray:[],
    }

}

render(){
     
    return(
            <div className="renderList">
                <h2>You currently have {this.props.data.length} tasks</h2>   
                <ul>
        {this.props.data.map(task => (
        <li key={"1" + task}>{task}</li>
      ))}

                </ul>  
                 
            </div>
        )
    }
}

export default ShowList; 