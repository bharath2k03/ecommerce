import {React, useState} from "react"
import "./style.css"
import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom';
import Payment from './Payment';

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const history = useHistory();
  const [selectedOption, setSelectedOption, cprice] = useState('');

  const redirectToPayment = () => {
    history.push('/payment');
  };
  const handleSelectChange = (event) => {
    if(selectedOption=="BTC")
    {
      totalPrice = totalPrice * 5;
    }
    setSelectedOption(event.target.value);
  };

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
              
     
            </div>
            
  
          </div>
          <div className='cart-total1 product'>
            <h2>CheckOut</h2>
            
            <select class="custom-dropdown" value={selectedOption} onChange={handleSelectChange}>
  <option value="">Choose your crypto currency</option>
  <option value={totalPrice*0.000037}>BTC</option>
  <option value={totalPrice*117240}>SHIBA INU</option>
  <option value={totalPrice*0.00054}>ETHEREUM</option>
  <option value={totalPrice*1.09}>MATIC</option>
</select>    
            
          

        
      
<p class="selected-option">Total price: {selectedOption}</p>
<div className=' d_flex'>
            <button className="button" onClick={redirectToPayment}>Place Your Order</button>

              </div>
</div>
        </div>
         
      </section>
    </>
  )
}

export default Cart
