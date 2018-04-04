import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/actions';
import styled from 'styled-components';

const GroupButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  align-content: center;
`

const GroupButton = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: grey;
`

export class Matches extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeGroup: 'a'
    }
  }
  
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <GroupButtons>
        {this.props.data && Object.keys(this.props.data.groups).map(groupName => (
          <GroupButton 
            style={{background: this.state.activeGroup === groupName && '#1890ff'}}
            key={groupName}
            onClick={() =>this.setState({activeGroup: groupName})}>{groupName.toUpperCase()}
          </GroupButton>
          )
        )}
        </GroupButtons>
        {this.props.data && this.props.data.groups[this.state.activeGroup].matches.map((match) => (
          <div key={match.name}>
            <p>{match.date}</p>
            <p>{this.props.data.teams[match.home_team - 1].name} vs. {this.props.data.teams[match.away_team - 1].name}</p>
          </div>
          )
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
