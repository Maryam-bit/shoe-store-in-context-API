import React, { useContext } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ShippingContext } from '../../../config/context'
import Button from '../../button/button.component'
import Heading from '../../heading/heading.component'
import './personal-information.styles.scss'


const PersonalInformation = ({ handleNext }) => {
    let [shippingDetails, setShippingDetails] = useContext(ShippingContext);

    return (
        <>
        <div className="personal-information-container container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-8 col-md-8">
                    <div className="card shadow">

                        <div className="card-header">
                            <Heading personalInformation />
                        </div>

                        <div className="card-body pl-5 pr-5">
                            <Formik
                                initialValues={{ firstName: '', lastName: '', email: '' }}
                                validationSchema={Yup.object({
                                    firstName: Yup
                                        .string()
                                        .min(2, "Too Short!")
                                        .max(20, "Too Long!")
                                        .required('Firstname is required'),
                                    lastName: Yup
                                        .string()
                                        .min(2, "Too Short!")
                                        .max(20, "Too Long!")
                                        .required('Lastname is Required'),
                                    email: Yup
                                        .string()
                                        .email('Invalid Email!')
                                        .required('Email is required'),
                                })}
                                onSubmit={(values) => {
                                    handleNext()
                                    console.log(JSON.stringify(values, null, 2));
                                    setShippingDetails({ ...shippingDetails, ...values })
                                    console.log('shipping detal ', shippingDetails)
                                }}
                            >
                                <Form>
                                    <label htmlFor="firstName">First Name</label>
                                    <Field id="firstName" name="firstName" placeholder="Jane" />
                                    <ErrorMessage name="firstName">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="lastName">Last Name</label>
                                    <Field id="lastName" name="lastName" placeholder="Doe" />
                                    <ErrorMessage name="lastName">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="email">Email</label>
                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="jane@acme.com"
                                        type="email"
                                    />
                                    <ErrorMessage name="email">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <div className="btn-container text-center mt-3">
                                        <Button value='Submit' type="submit" onClick={handleNext} />
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
            </div>
        </div>
        </>
    );
};

export default PersonalInformation;
