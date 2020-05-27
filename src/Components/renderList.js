import React from "react";

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
            <div>
                <ul>
        {this.props.data.map(task => (
        <li key={task}>{task}</li>
      ))}

                </ul>  

                 <h4>You currently have {this.props.data.length} tasks</h4>   
            </div>
        )
    }
}

export default ShowList; 