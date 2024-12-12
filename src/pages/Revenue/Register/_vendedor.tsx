import React from 'react'
import { Card, CardBody, CardTitle, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { useFormik } from "formik";

import * as Yup from 'yup';

type Props = {}

const Vendedor = (props: Props) => {
    const formik: any = useFormik({
        initialValues: {
            name: "",
            city: "",
            state: "",
            zip: "",
            check: "",
            start_date: "",
            category: "",
            equip: "",
            client_code: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("This field is required"),
            city: Yup.string().required("This field is required"),
            state: Yup.string().required("This field is required"),
            zip: Yup.string().required("This field is required"),
            check: Yup.string().required("This field is required"),
            start_date: Yup.string().required("This field is required"),
            category: Yup.string().required("This field is required"),
            equip: Yup.string().required("This field is required"),
            client_code: Yup.string().required("This field is required"),
        }),

        onSubmit: (values: any) => {
            // console.log("value", values.password);
        },
    });

    return (
        <React.Fragment>
            <div className=''>
                <Form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">Nome</Label>
                        <Input
                            type="text"
                            name="name"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Nome do Vendedor"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            invalid={
                                formik.touched.name && formik.errors.name ? true : false
                            }
                        />
                        {
                            formik.errors.name && formik.touched.name ? (
                                <FormFeedback type="invalid">{formik.errors.name}</FormFeedback>
                            ) : null
                        }
                    </div>

                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-email-Input">Data de início</Label>
                                <Input
                                    type="date"
                                    name="start-date"
                                    className="form-control"
                                    id="formrow-email-Input"
                                    placeholder="Data de Início"
                                    value={formik.values.start_date}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={
                                        formik.touched.start_date && formik.errors.start_date ? true : false
                                    }
                                />
                                {
                                    formik.errors.start_date && formik.touched.start_date ? (
                                        <FormFeedback type="invalid">{formik.errors.start_date}</FormFeedback>
                                    ) : null
                                }
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Categoria</Label>
                                <select
                                    className="form-control"
                                    name='category'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option>Select</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                                {
                                    formik.errors.category && formik.touched.category ? (
                                        <FormFeedback type="invalid">{formik.errors.category}</FormFeedback>
                                    ) : null
                                }
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputCity">Equipe</Label>
                                <Input
                                    type="text"
                                    name="Equip"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="Digite a equipe"
                                    value={formik.values.equip}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={
                                        formik.touched.equip && formik.errors.equip ? true : false
                                    }
                                />
                                {
                                    formik.errors.equip && formik.touched.equip ? (
                                        <FormFeedback type="invalid">{formik.errors.equip}</FormFeedback>
                                    ) : null
                                }
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-InputState">Código cliente</Label>
                                <Input
                                    type="text"
                                    name="Equip"
                                    className="form-control"
                                    id="formrow-InputCity"
                                    placeholder="Digite a equipe"
                                    value={formik.values.equip}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={
                                        formik.touched.equip && formik.errors.equip ? true : false
                                    }
                                />
                                {
                                    formik.errors.client_code && formik.touched.client_code ? (
                                        <span className="text-danger">{formik.errors.client_code}</span>
                                    ) : null
                                }
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Usuário</Label>
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
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Tipo Mercado</Label>
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
                        <Col lg={4}>
                            <div className="mb-3">
                                <Label htmlFor="formrow-password-Input">Segmento</Label>
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

                        <Col lg={4}>
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
                                        Ativo
                                    </Label>
                                </div>
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

export default Vendedor