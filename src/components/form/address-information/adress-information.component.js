import React, { useContext } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ShippingContext } from '../../../config/context'
import Button from '../../button/button.component'
import { Heading2 } from '../../heading/heading.component'
import './adress-information.styles.scss'


const AddressInformation = ({ handleNext }) => {
    let [shippingDetails, setShippingDetails] = useContext(ShippingContext);

    return (
        <div className="address-information-container container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-8 col-md-8">
                    <div className="card shadow">

                        <div className="card-header">
                            <Heading2 addressInformation />
                        </div>

                        <div className="card-body pl-5 pr-5">
                            <Formik
                                initialValues={{ country: '', city: '', state: '', address: '' }}
                                validationSchema={Yup.object({
                                    country: Yup
                                        .string()
                                        .required('Coumtry is required'),
                                    city: Yup
                                        .string()
                                        .required('City is Required'),
                                    state: Yup
                                        .string()
                                        .required('State is required'),
                                    code: Yup
                                        .string()
                                        .max(5, 'zip code must contain 5 digits')
                                        .min(5, 'zip code must contain 5 digits')
                                        .required('Zip Code is required'),
                                    address: Yup
                                        .string()
                                        .required('Adress is required'),
                                })}
                                onSubmit={(values) => {
                                    handleNext()
                                    console.log(JSON.stringify(values, null, 2));
                                    setShippingDetails({ ...shippingDetails, ...values })
                                    console.log('shipping details ', shippingDetails)
                                }}
                            >
                                <Form>
                                    <label htmlFor="country">Country</label>
                                    <Field id="country" name="country" placeholder="Pakistan" />
                                    <ErrorMessage name="country">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="city">City</label>
                                    <Field id="city" name="city" placeholder="Islamabad" />
                                    <ErrorMessage name="city">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="state">Province/State/region</label>
                                    <Field
                                        id="state"
                                        name="state"
                                        placeholder="Punjab"
                                    />
                                    <ErrorMessage name="state">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="code">Zip Code</label>
                                    <Field
                                        id="code"
                                        name="code"
                                        placeholder="43000"
                                        type="number"
                                    />
                                    <ErrorMessage name="code">
                                        {(msg) => <div className="error-message">{msg}</div>}
                                    </ErrorMessage>

                                    <label htmlFor="address">Address</label>
                                    <Field
                                        id="address"
                                        name="address"
                                        placeholder="house#-20, street#-2"
                                    />
                                    <ErrorMessage name="address">
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
    );
};

export default AddressInformation;
