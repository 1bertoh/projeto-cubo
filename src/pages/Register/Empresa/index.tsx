import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { useFormik } from "formik";

import * as Yup from 'yup';
import InputMask from "react-input-mask"

type Props = {}

const CadEmpresa = (props: Props) => {
    const [cnpj, setCnpj] = useState("")
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

    const CNPJ = (props: any) => (
        <InputMask
            mask="99.999.999/0001-99"
            name="cnpj"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        // invalid={
        //     formik.touched.email && formik.errors.email ? true : false
        // }
        >
        </InputMask>
    )

    return (
        <React.Fragment>
            <div className='page-content'>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Cadastro da Empresa</CardTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col md={6} style={{ margin: "auto" }}>
                                    <Row>
                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="formrow-email-Input">Nome</Label>
                                                <Input
                                                    type="text"
                                                    name="name"
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
                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="formrow-email-Input">CNPJ</Label>
                                                <CNPJ/>
                                                {/* {
                                    formik.errors.email && formik.touched.email ? (
                                        <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                    ) : null
                                } */}
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="formrow-password-Input">Banco de dados</Label>
                                                <select
                                                    className="form-control"
                                                    name='db'
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
                                    </Row>
                                </Col>
                            </Row>

                            <Col md={6} style={{ margin: "auto" }}>
                                <div>
                                    <button type="submit" className="btn btn-primary w-md">
                                        Submit
                                    </button>
                                </div>
                            </Col>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default CadEmpresa