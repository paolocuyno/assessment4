

import React, { Component } from 'react';
import Meal from './Meal';
import Checkout from './Checkout'
import { render } from 'react-dom';
import App from '../App'
import Kitchen from './Kitchen'



class Myplate extends Component {
  

    render() {
        if (this.props.selectedItems) {
            var mappedItems = this.props.selectedItems.map((item, index) => {
                return (<div className="Myplate-item">
                    { item.name} <br />
                    { item.price} <br />
                </div >
                );
            });

            return (
                <div className="Myplate-title" >
                    <h3>My Plate</h3>
                    <div className="Myplate-item-list">
                        {mappedItems}
                    </div >
                    
                </div>
            );
        }
    }
}

// render(){
//     const mappedItems=this.props.selectedItems.map((name)=> {
//         return(<div handleSelect={()=>this.props.handleSelect(name)}>
//             <b>{name}</b>
//         </div>
//         );
//     });
// //     <Meal
// //         key={i}
// //         items={items}
// //         nameFn={props.nameFn}
// //         clearFn={props.clearFn}/> 
// // ))
// )}
// }
// return(
//     <div>
//         <h2>My Plate</h2>
//         <div className='menu-section'>
//             {this.props.selectedItems}
//         </div>
//         <Checkout/>
//     </div>

// )
// }}
export default Myplate;


// import React, { Component } from 'react';
// import Meal from './Meal';
// import Checkout from './Checkout'
// import { render } from 'react-dom';
// import App from '../App'
// import Kitchen from './Kitchen'

// class Myplate extends Component{
//     render(){
//         const mappedItems=this.props.selectedItems.map((name)=> {
//             return(<div handleSelect={()=>this.props.handleSelect(name)}>
//                 <b>{name}</b>
//             </div>
//             );
//         });
//     // //     <Meal
//     // //         key={i}
//     // //         items={items}
//     // //         nameFn={props.nameFn}
//     // //         clearFn={props.clearFn}/> 
//     // // ))
//     // )}
//     // }
//     return(
//         <div>
//             <h2>My Plate</h2>
//             <div className='menu-section'>
//                 {this.props.selectedItems}
//             </div>
//             <Checkout/>
//         </div>
    
//     )
//     }}
// export default Myplate;