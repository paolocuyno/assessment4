
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Kitchen from './components/Kitchen';
import Myplate from './components/Myplate';
import axios from 'axios'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedItems:[],
      menuItems:[],
      orderedItems:[]
    }
    this.selectItems=this.selectItems.bind(this);
  }
componentDidMount(){
  axios.get('/api/my-app')
  .then(res =>{
    this.setState({menuItems:res.data})
  console.log(res)})
  .catch(err=> console.log(err))
}
handleSelect=(name,price)=>{
  axios.post('/api/my-app',{name,price})
  .then(res =>{
      this.setState({orderedItems:res.data})
  })
  .catch(err=>console.log(err))
    // const {items}=this.props;
    // let newItems={
    //     name:items.name,
    //     image:items.img

    // }
    // this.props.selectFn(newItems);
    // this.props.refreshFn();

}

selectItems(items){
  axios.post('/api/my-app')
  .then(res=>{
    this.setState({selectItems:res.data})
  })
  .catch(err=>console.log(err))
}

// editName=(id,newName)=>{
//   let body={name:newName};
//   axios.put(`/api/my-app/${id}`,body)
//   .then(res=>{
//     this.setState({selectedItems:res.data})
//   })
//   .catch(err=>console.log(err))

// }
clearPlate=(id)=>{
  axios.delete(`/api/my-app/${id}`)
  .then(res =>{
    this.setState({selectedItems:res.data})
  })
  .catch(err=> console.log(err))
}
  render(){ 
    console.log(this.state.menuItems)
  return (
    <div className="App">
      <header className="App-header">
     <Header/>
      </header>

      <section className='body'>
     <article className='kitchen'>
       <Kitchen menuItems={this.state.menuItems} handleSelect={this.handleSelect.bind(this)}/>
     </article>
    <article className='myPlate' ><Myplate selectedItems={this.state.selectedItems}/> </article>

      </section>
    </div>
  )
}
}

export default App;
