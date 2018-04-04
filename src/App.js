import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches';
import Poules from './components/Poules/Poules';
import Menu from './components/Menu/Menu';
import 'antd/dist/antd.css';

const FullApp = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`
const AppContent = styled.div`
  align-self: flex-start;
  height: calc(100vh - 50px);
  overflow: scroll;
`
const AppMenu = styled.div`
  border-top: 1px solid lightgrey;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 50px;
`

class App extends Component {
  render() {
    return (
      <FullApp className="App">
        <AppContent>
          <Route path='/' exact component={Home}/>
          <Route path='/matches' component={Matches}/>
          <Route path='/poules' component={Poules}/>
        </AppContent>
        <AppMenu>
          <Menu />
        </AppMenu>
      </FullApp>
    );
  }
}

export default App;
