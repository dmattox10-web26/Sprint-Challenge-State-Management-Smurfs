import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

const SmurfCard = props => {

    const { name, age, height, id } = props.smurf

    return (
        <Row>
            <Col xs='1'></Col>
            <Col xs='10'>
                <Card>
                    <CardBody>
                        <CardTitle>Name: { name }</CardTitle>
                        <CardText>Age: { age }</CardText>
                        <CardText>Height (cm): { height }</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col xs='1'></Col>
        </Row>
    )
}

export default SmurfCard