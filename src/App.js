import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './store/actions';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import { withRouter } from 'react-router';
import Loadable from './utils/loadable';
import 'antd/dist/antd.css';

const FullApp = styled.div`
  margin: 20px 20px 55px 20px;
  display: flex;
  flex-direction: column;
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

const AsyncHome = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home" */ './components/Home/Home'),
});

const AsyncMatches = Loadable({
  loader: () =>
    import(/* webpackChunkName: "matches" */ './components/Matches/Matches'),
});

const AsyncPoules = Loadable({
  loader: () =>
    import(/* webpackChunkName: "poules" */ './components/Poules/Poules'),
});

class App extends Component {
  componentDidMount = () => {
    this.props.actions.fetchData()
  }
  

  render() {
    return (
      <FullApp className="App">
        <AppContent>
          <Route path='/' exact component={AsyncHome}/>
          <Route path='/matches' component={AsyncMatches}/>
          <Route path='/poules' component={AsyncPoules}/>
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
