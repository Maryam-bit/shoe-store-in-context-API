import React from 'react'
import './submitted-message.styles.scss'

const SubmittedMessage = () => {
    return (
        <div className="submitted-message-container container-fluid mt-3">
            <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-8 col-md-8">
                    <div className="card shadow">
                        <div className="card-header text-center">
                            <h2>Thanks for Your Order!</h2>
                        </div>
                        <div className="card-body text-center pl-5 pr-5">
                            <p> We have emailed your order confirmation, and will send you an update when your order has shipped.</p>
                            <h3>Don't worry it's just a templete!</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>

            </div>
        </div>
    );
}

export default SubmittedMessage;