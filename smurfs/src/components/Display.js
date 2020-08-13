import React, { useContext } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import cuid from 'cuid'

import { SmurfContext } from '../contexts/SmurfContext'

import SmurfCard from './SmurfCard'

const Display = () => {

    const { smurfs } = useContext(SmurfContext)

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <div className='center'>
                    <h1>The Smurfs!</h1>
                </div>
                { smurfs.map(smurf => <SmurfCard key={ cuid() } smurf={ smurf } />)}
            </Jumbotron>
        </Container>
    )
}

export default Display