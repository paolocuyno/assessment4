import React,{Component} from 'react';
import axios from 'axios';
import Kitchen from './Kitchen';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menuItems=[]
        }
    }
    componentDidMount(){
        this.selectMenuItems();
    }
    getMenuItems= () => {
        axios.get('/api/my-app')
        .then(res=>{
            this.setState({menuItems:res.data})
        })
        .catch(err => 
            console.log(err))
        }
    


render(){
    console.log(this.state.menuItems)
    const mappedMenuItems=this.state.menuItems.map((item,i)
    => (<Kitchen
        key={i}
        items={items}
        selectFn={this.props.selectFn}
        refreshFn={this.getMenuItems}/>
    ))
    return(
        <div className='menu-section'>
            {mappedMenuItems}
        </div>
    )
}
}
export default Menu; 