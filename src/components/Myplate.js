

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
                    <Checkout total={this.props.total} clearPlate={this.props.clearPlate}/>
                    
                </div>
            );
        }
    }
}


export default Myplate;

