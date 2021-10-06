import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

// Styles
import '../styles/components/Payment.css';

// Contexts
import AppContext from '../context/AppContext';

// Utils
import handleSumTotal from '../utils';

const Payment = () => {
    
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();

    const paypalOptions = {
        clientId: process.env.CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = data => {
        
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4> {item.title} </h4>
                            <span>
                                $ {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={() => console.log("Start payment")}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={err => console.log(err)}
                        onPaymentCancel={data => console.log(data)} />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment;