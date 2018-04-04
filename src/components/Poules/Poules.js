import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/actions';
import styled from 'styled-components';
import convertTime from '../../utils/convertTime';

const GroupButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px;
  align-content: center;
`

const GroupButton = styled.div`
  border-radius: 5px;
  display: flex;
  margin: 5px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: lightgrey;
`

export class Poules extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeGroup: 'a'
    }
  }

  render() {
    return (
      <div>
      <h1>Poules</h1>
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
        {this.props.data && this.props.data.groups[this.state.activeGroup].matches.map((match, index) => (
          <div key={match.name}>
            {convertTime(match.date, 'ddd DD-MM-YY HH:mm')}
            <br/>
            {this.props.data.teams[match.home_team - 1].name} vs. {this.props.data.teams[match.away_team - 1].name}
            {index !== this.props.data.groups[this.state.activeGroup].matches.length - 1 && <hr/>}
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
)(Poules);
