import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

import { SmurfContext } from '../contexts/SmurfContext'

const SmurfCard = props => {

    const { name, age, height, id } = props.smurf

    const { updateSmurf, deleteSmurf } = useContext(SmurfContext)

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    const formik = useFormik({
        initialValues: {
            name: name,
            age: age,
            height: height,
            id: id
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
            updateSmurf(values)
            toggle()
        },
    })

    return (
        <Row>
            <Col xs='1'></Col>
            <Col xs='10'>
                <Card>
                    <CardBody>
                        <CardTitle>Name: { name }</CardTitle>
                        <CardText>Age: { age }</CardText>
                        <CardText>Height (cm): { height }</CardText>
                        <Button onClick={() => deleteSmurf(id)}>They Died!</Button><Button onClick={toggle}>Edit</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xs='1'></Col>
            <Modal isOpen={modal} toggle={toggle} className='alert alert-dissmissible alert-warning'>
                <ModalHeader toggle={toggle}>Edit {name}</ModalHeader>
                <ModalBody>
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
                                        class={formik.touched.name && !formik.errors.name ? 'form-control is-valid' : 'form-control is-invalid'}
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
                                        class={formik.touched.age && !formik.errors.age ? 'form-control is-valid' : 'form-control is-invalid'}
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
                                        class={formik.touched.height && !formik.errors.height ? 'form-control is-valid' : 'form-control is-invalid'}
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
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Row>
    )
}

export default SmurfCard