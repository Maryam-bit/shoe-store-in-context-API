import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IbAzkGNTZB1mlXGsrRlsJcICwXUe5w9yWw1axTw7RPj6pQJmYJQbv1hr1RUghnjE4dW5rDUdXDCfYZu7h6NQe5j004WoQKEbD';

    const onToken = token => {
        console.log(token)
        alert('Payment Sucessful');
    }
    return (
        <StripeCheckout 
        label='Pay now'
        name='crown clothind Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;