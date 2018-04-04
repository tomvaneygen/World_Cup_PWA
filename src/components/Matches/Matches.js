import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/actions';
import styled from 'styled-components';
import convertTime from '../../utils/convertTime';

const GroupButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50px;
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

export class Matches extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeRound: 'round_16'
    }
  }
  
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <GroupButtons>
        {this.props.data && Object.keys(this.props.data.knockout).map(round => (
          <GroupButton 
            style={{background: this.state.activeRound === round && '#1890ff'}}
            key={round}
            onClick={() => this.setState({activeRound: round})}>{this.props.data.knockout[round].name}
          </GroupButton>
          )
        )}
        </GroupButtons>
        {this.props.data && this.props.data.knockout[this.state.activeRound].matches.map((match, index) => (
          <div key={match.name}>
            {convertTime(match.date, 'ddd DD-MM-YY HH:mm')}
            <br/>
            {match.home_team} vs. {match.away_team}
            {index !== this.props.data.knockout[this.state.activeRound].matches.length - 1 && <hr/>}
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
