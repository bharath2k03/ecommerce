import {React,useState} from 'react';
import { useHistory } from 'react-router-dom';

import myImage from "../../components/assets/images/qr1.png"
import "./style.css"
const Payment = () => {
  // const history = useHistory();
  // const [selectedOption, setSelectedOption] = useState('');

  // const goBackToCart = () => {
  //   history.push('/cart');
  // };

  
    
  
  //   const handleSelectChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };

  return (
    <div>
    <div className='payment'>
    
      <h2>Payment Page</h2>
      <img style={{width: "200px", height: "200px"}} src={myImage}></img>
      {/* Add your payment page content */}
{/* 
      <div>
      <select class="custom-dropdown" value={selectedOption} onChange={handleSelectChange}>
  <option value="">Select an option</option>
  <option value="BTC">BTC</option>
  <option value="SHIBA INU">SHIBA INU</option>
  <option value="ETHEREUM">ETHEREUM</option>
  <option value="MATIC">MATIC</option>
</select>


<p class="selected-option">Selected option: {selectedOption}</p>
    </div> */}
      
        
      
      </div>
      
       
      
</div>
    
  );
};

export default Payment;
{/* <div className='cart-total product'>
            <h2>CheckOut</h2>
            <div className=' d_flex'>
            <button className="button" onClick={redirectToPayment}>Place Your Order</button>

              </div>
          </div> */}