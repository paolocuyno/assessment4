import React, { Component } from 'react'
import axios from 'axios'

class Kitchen extends Component {
    constructor() {
        super()
        this.state = {
            menuItems: []
        }
    }

    render() {
        var mappedMenuItems = this.props.menuItems.map((elem, index) => {
            return (<div className="Kitchen-items"
                onClick={() => this.props.handleSelect(elem.name, elem.price)}>
                <img className="Kitchen-item-image" alt="{elem.name}"
                    src={elem.img} width="10" height="10" />
                <p>{elem.name}</p>
                <p>{elem.price}</p>
            </div >
            );
        });

        return (
            <div className="Kitchen-mapped-items" >
                {mappedMenuItems}
            </div >
        );

    }

    
}
export default Kitchen;