import React, {Component} from 'react';

class Meal extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            nameInput:''
        }
    }
handleInput=(val) => {
    this.setState({nameInput:val})
}



handleEdit=(id) => {
    this.props.nameFn(id, this.state.nameInput);
    this.handleToggle();
}

render(){
    return(
        <div>
            <img src={this.props.items.image} alt={this.props.items.name}/>


        </div>
    )
}

}
export default Meal;