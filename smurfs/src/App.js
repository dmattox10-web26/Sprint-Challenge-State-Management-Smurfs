import React, { useState } from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'
import classnames from 'classnames';

import Add from './components/Add'
import Display from './components/Display'

import { SmurfContext } from './contexts/SmurfContext'

import { useVillage } from './hooks/useVillage'

import Population from './components/Population'

const App = () => {
  
    const [smurfs, addSmurf, updateSmurf, deleteSmurf] = useVillage()

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
      <div className='App'>
        <SmurfContext.Provider value={{smurfs, addSmurf, updateSmurf, deleteSmurf}}>
          <div className='spacer'></div>
            <Population />
          <div className='spacer'></div>
          <Container>
            <Nav tabs>
              <NavItem className='half'>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  Add
                </NavLink>
              </NavItem>
              <NavItem className='half'>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Display
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Add />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Display />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Container>
        </SmurfContext.Provider>
      </div>
    )

}

export default App
