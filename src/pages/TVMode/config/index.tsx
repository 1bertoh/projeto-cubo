import Breadcrumb from 'Components/Common/Breadcrumb'
import { useFormik } from 'formik'
import React from 'react'
import { Card, CardBody, CardTitle, Col, Form, Input, Label, Row } from 'reactstrap'
import * as Yup from 'yup'

type Props = {}

const TvModeConfig = (props: Props) => {
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
        <Breadcrumb title="Modo Tv" breadPath={[{ link: "#", name: "Modo TV" }, { link: "#", name: "Configuração" }]} />
        <div>
          <Card>
            <CardBody>
              <CardTitle className="h4 mb-4">Configurar Modo TV</CardTitle>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col lg={1}>
                    <div
                      className="form-check form-switch mb-3"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizesm"
                        defaultChecked
                        onClick={e => {
                          // settoggleSwitchSize(!toggleSwitchSize)
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizesm"
                      >
                        Estoque
                      </label>
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div
                      className="form-check form-switch mb-3"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizesm"
                        defaultChecked
                        onClick={e => {
                          // settoggleSwitchSize(!toggleSwitchSize)
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizesm"
                      >
                        Faturamento
                      </label>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={3}>
                    <div className="mb-3">
                      <Label htmlFor="formrow-InputCity">Intervalo entre as telas (seg)</Label>
                      <Input
                        type="number"
                        name="intervalo"
                        className="form-control"
                        id="formrow-InputCity"
                        placeholder="0"
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
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TvModeConfig