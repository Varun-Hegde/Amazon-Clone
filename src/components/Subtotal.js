import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Subtotal() {
    const [ { basket }, dispatch ] = useStateValue();
    var val='item'
    if(basket.length > 1)
        val = 'items';
    var price=0;
    const getBasketTotal = () => {
        if(basket.size === 0)
            return 0;
        basket.map((item) => {
            price = price+item.price;
        } )
        return price;
    }
    return (
        <div>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png' alt='img' />
        
        <div className='subtotal'>
            
            <CurrencyFormat 
            renderText = {(value) => (
                <>
                
                <p>
            Subtotal ({basket.length} {val}):<strong>{` ${value}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' />This order contains a gift
                </small>
                </>
            )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSpacing={'2s'}
              thousandSeparator={true}
              prefix={'₹'}  
            />
            <button>Proceed to Checkout</button>
        </div>
        </div>
    )
}

export default Subtotal
