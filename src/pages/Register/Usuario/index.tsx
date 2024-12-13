import React from 'react'
import { Card, CardBody, CardTitle, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { useFormik } from "formik";

import * as Yup from 'yup';

type Props = {}

const Admin = (props: Props) => {
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
            <div className='page-content'>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Cadastro do Usuário</CardTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Label htmlFor="formrow-InputCity">Nome do Usuário</Label>
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
                                        <Label htmlFor="formrow-InputCity">E-mail</Label>
                                        <Input
                                            type="email"
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
                                        <Label htmlFor="formrow-InputCity">Senha</Label>
                                        <Input
                                            type="password"
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
                                        <Label htmlFor="formrow-InputCity">Confirmar Senha</Label>
                                        <Input
                                            type="password"
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
                                        <Label htmlFor="formrow-InputCity">Telefone</Label>
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
                                        <Label htmlFor="formrow-password-Input">Tipo</Label>
                                        <select
                                            className="form-control"
                                            name='category'
                                        // value={formik.values.password}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        >
                                            <option>Select</option>
                                            <option>Usuario</option>
                                        </select>
                                        {/* {
                                                                    formik.errors.category && formik.touched.category ? (
                                                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                                                    ) : null
                                                                } */}
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Label htmlFor="formrow-password-Input">Departamento</Label>
                                        <select
                                            className="form-control"
                                            name='category'
                                        // value={formik.values.password}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        >
                                            <option>Select</option>
                                            <option>D1</option>
                                            <option>D2</option>
                                        </select>
                                        {/* {
                                                                    formik.errors.category && formik.touched.category ? (
                                                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                                                    ) : null
                                                                } */}
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Label htmlFor="formrow-password-Input">Empresa</Label>
                                        <select
                                            className="form-control"
                                            name='category'
                                        // value={formik.values.password}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        >
                                            <option>Select</option>
                                            <option>E1</option>
                                            <option>E2</option>
                                        </select>
                                        {/* {
                                                                    formik.errors.category && formik.touched.category ? (
                                                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                                                    ) : null
                                                                } */}
                                    </div>
                                </Col>
                            </Row>
                            <div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            className="form-check-Input"
                                            id="formrow-customCheck"
                                            name="check"
                                        // value={formik.values.check}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        // invalid={
                                        //     formik.touched.check && formik.errors.check ? true : false
                                        // }
                                        />
                                        <Label
                                            className="form-check-Label"
                                            htmlFor="formrow-customCheck"
                                        >
                                            Plano de Ação?
                                        </Label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary w-md">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Admin