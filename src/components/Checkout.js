import React from 'react'


const Checkout = props => {

    
return(
<div>

<section>
<h3>Total: ${props.total}</h3>
</section>
    <button onClick={props.clearPlate} >Checkout</button>
</div>)
}

export default Checkout;