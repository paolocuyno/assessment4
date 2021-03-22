import React,{Component} from 'react'
import axios from 'axios'

class Kitchen extends Component{
    constructor(){
        super()
        this.state={
        menuItems:[]
        }
    }
  
 
    render(){
        console.log(this.props.menuItems)
        return(
            <div onClick={this.handleSelect}>
            <h2>MENU</h2>
              {this.props.menuItems.map((elem,i)=>{
                  return(
              <div key={i}>
                  
                  <img onClick={()=>this.props.handleSelect(elem.name,elem.price)} src={elem.img} alt={elem.name}/>
                  <p>{elem.name}</p>
                  <p>{elem.price}</p>
              </div>    )
              }) }
            </div>
        )
}
}
export default Kitchen;
