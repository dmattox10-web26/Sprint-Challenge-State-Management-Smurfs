import React, { useContext } from 'react'

import { SmurfContext } from '../contexts/SmurfContext'

const Population = () => {

    const { smurfs } = useContext(SmurfContext)
    return (
        <div className='center'>
            <div className='display'>
                {smurfs.length}
            </div>
        </div>
    )
}

export default Population