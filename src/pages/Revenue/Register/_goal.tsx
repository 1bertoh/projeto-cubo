import React from 'react'
import { Card, CardBody, CardTitle, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { useFormik } from "formik";

import * as Yup from 'yup';

type Props = {}

const Goal = (props: Props) => {
    const formik: any = useFormik({
        initialValues: {
            firstname: "",
            email: "",
            password: "",
            city: "",
            state: "",
            zip: "",
            check: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("This field is required"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required("This field is required"),
            city: Yup.string().required("This field is required"),
            state: Yup.string().required("This field is required"),
            zip: Yup.string().required("This field is required"),
            check: Yup.string().required("This field is required"),
        }),

        onSubmit: (values: any) => {
            // console.log("value", values.password);
        },
    });

    return (
        <React.Fragment>
            <div className=''>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col md={1}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-email-Input">Cod. Reg.</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    id="formrow-email-Input"
                                    // placeholder="Enter Your Email ID"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.email && formik.errors.email ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.email && formik.touched.email ? (
                                        <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Função</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                // value={formik.values.password}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                                {/* {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Vendedor</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                // value={formik.values.password}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                                {/* {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Ano</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                // value={formik.values.password}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                </select>
                                {/* {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Mês</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                // value={formik.values.password}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                </select>
                                {/* {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Mercado</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                // value={formik.values.password}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>Mercado 1</option>
                                    <option>Mercado 2</option>
                                </select>
                                {/* {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta Mínima (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta Heróica (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta (M²)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta Mínima (M²)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Meta Heróica (M²)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col lg={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Ticket Médio Ml (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Ticket Médio ME (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Fat. por Cliente (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Qtd. Cli. Positivado (R$)</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="0,00"
                                    // value={formik.values.city}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // invalid={
                                    //     formik.touched.city && formik.errors.city ? true : false
                                    // }
                                />
                                {/* {
                                    formik.errors.city && formik.touched.city ? (
                                        <FormFeedback type="invalid">{formik.errors.city}</FormFeedback>
                                    ) : null
                                } */}
                            </div>
                        </Col>
                    </Row>

                    
                    <div>
                        <button type="submit" className="btn btn-primary w-md">
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Goal