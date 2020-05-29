import React from "react";

import "./styles/header_style.css"

// component that renders the list
class ShowList extends React.Component{


constructor(props){
    super(props);

    this.state = {
        listArray:[],
     
    }

}


render(){
    
     //it receives the list of tasks through props
    return(
            <div className="renderList">
                
                <h2>You currently have {this.props.data.length} tasks</h2>   
                <div id="fill_gap" >
                <ul>
        {this.props.data.map(task => 
            
         <li key={task}>{task} <button className="removeTask" key={task} onClick={() => this.props.removeToDo(task)}>Remove</button> 
         
        </li>
      )
      
        }

                </ul>  
                </div>
                 
            </div>
        )
    }
}

export default ShowList; 