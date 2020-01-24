import React, { useState } from 'react'
import { Container } from 'reactstrap'

import { SmurfContext } from './contexts/SmurfContext'

import { useVillage } from './hooks/useVillage'

import Population from './components/Population'

const App = () => {
  
    const [smurfs, addSmurf, updateSmurf, deleteSmurf] = useVillage()

    return (
      <div className='App'>
        <SmurfContext.Provider value={{smurfs, addSmurf, updateSmurf, deleteSmurf}}>
          <div className='spacer'></div>
            <Population />
          <div className='spacer'></div>
          <Container>

          </Container>
        </SmurfContext.Provider>
      </div>
    )

}

export default App
