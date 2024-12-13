import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Col, Form, FormFeedback, Input, Label, Row, Table } from 'reactstrap'
import { useFormik } from "formik";

import * as Yup from 'yup';

type Props = {}

const Goal = (props: Props) => {
    const [data, setData] = useState([
        { name: "Meta Mínima (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Meta (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Meta Heróica (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Meta Mínima (Vol.)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Meta (Vol.)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Meta Heróica (Vol.)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },

        { name: "Ticket Médio Ml (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Ticket Médio ME (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Fat. por Cliente (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
        { name: "Qtd. Cli. Positivado (R$)", janeiro: 80, fevereiro: 90, março: 85, abril: 100, maio: 0, junho: 0, julho: 0, agosto: 0, setembro: 0, outubro: 0, novembro: 0, dezembro: 0 },
    ]);

    const [editingCell, setEditingCell] = useState({ row: null, column: null });

    const handleEdit = (rowIndex, column) => {
        setEditingCell({ row: rowIndex, column });
    };

    const handleChange = (event, rowIndex, column) => {
        const newData = [...data];
        newData[rowIndex][column] = event.target.value;
        setData(newData);
    };

    const handleBlur = () => {
        setEditingCell({ row: null, column: null });
    };

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
                    </Row>
                </Form>
            </div>

            <div className='mt-5'>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Janeiro</th>
                            <th>Fevereiro</th>
                            <th>Março</th>
                            <th>Abril</th>
                            <th>Maio</th>
                            <th>Junho</th>
                            <th>Julho</th>
                            <th>Agosto</th>
                            <th>Setembro</th>
                            <th>Outubro</th>
                            <th>Novembro</th>
                            <th>Dezembro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={{ fontWeight: "bold" }}>{row.name}</td>
                                {Object.keys(row)
                                    .filter((key) => key !== "name")
                                    .map((month, colIndex) => (
                                        <td
                                            key={colIndex}
                                            onClick={() => handleEdit(rowIndex, month)}
                                            style={{ cursor: "pointer", height: 50, position: "relative" }}
                                        >
                                            {editingCell.row === rowIndex && editingCell.column === month ? (
                                                <input
                                                    style={{ position: "absolute", zIndex: 50, width: 100 }}
                                                    type="number"
                                                    value={row[month]}
                                                    onChange={(event) => handleChange(event, rowIndex, month)}
                                                    onBlur={handleBlur}
                                                    autoFocus
                                                />
                                            ) : (
                                                row[month]
                                            )}
                                        </td>
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <button type="submit" className="btn btn-primary w-md">
                        Submit
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Goal