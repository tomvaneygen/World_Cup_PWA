import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './store/actions';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches';
import Poules from './components/Poules/Poules';
import Menu from './components/Menu/Menu';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';

const FullApp = styled.div`
  margin: 20px 20px 55px 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const AppContent = styled.div`
  align-self: flex-start;
  flex: 1;
  width: 100%;
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
  componentDidMount = () => {
    this.props.actions.fetchData()
  }
  

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

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
