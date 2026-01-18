import dayjs from 'dayjs';
import { moneyFormatting } from '../utilities/moneyFormatting';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function CartSummary({cart}){
  const [deliveryOption, setDeliveryOption] = useState([]);
  
    useEffect(() =>{
      axios.get('/api/delivery-options?expand=estimateDeliveryTime').then((response)=>{
        setDeliveryOption(response.data);
      });
    },[]);

  return(
    <div className="order-summary">
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  {moneyFormatting(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <span className="quantity-label">2</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
                  {deliveryOption.map((option) => {
                    return (
                      <div key={option.id} className="delivery-option">
                        <input
                          type="radio"
                          checked={false}
                          className="delivery-option-input"
                          name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                        <div className="delivery-option-date">
                          {dayjs().add(option.deliveryDays, 'days').format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">
                          {option.priceCents === 0
                            ? 'FREE Shipping'
                            : `$${moneyFormatting(option.priceCents)} - Shipping`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}