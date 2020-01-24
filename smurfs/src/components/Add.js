import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Jumbotron, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { SmurfContext } from '../contexts/SmurfContext'

const Add = () => {

    const { addSmurf } = useContext(SmurfContext)

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            height: '',
        },
        validationSchema: Yup.object({
           name: Yup.string()
           .required('Required'),
           age: Yup.string()
           .required('Required'),
           height: Yup.string()
           .required('Required')
        }),
        onSubmit: values => {
            addSmurf(values)
        },
    })

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <div className='center'>
                    <h1>Add Smurfs!</h1>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className={formik.touched.name && !formik.errors.name ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.name && formik.errors.name ? <div className='invalid-feedback'>{formik.errors.name}</div> : null}
                            </FormGroup>
                        </Col>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='age'>Age</Label>
                                <Input
                                    id='age'
                                    name='age'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.age}
                                    className={formik.touched.age && !formik.errors.age ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.age && formik.errors.age ? <div className='invalid-feedback'>{formik.errors.age}</div> : null}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='height'>Height (cm)</Label>
                                <Input
                                    id='height'
                                    name='height'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.height}
                                    className={formik.touched.height && !formik.errors.height ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.height && formik.errors.height ? <div className='invalid-feedback'>{formik.errors.height}</div> : null}
                            </FormGroup>
                        </Col>
                        <Col xs='6'>
                        <Label for='submit'>&nbsp;</Label>
                            <Button type='submit' style={{width: '100%'}} className='btn-info'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default Add