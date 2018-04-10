import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Radio } from 'antd'
import * as actions from '../../store/actions';
import convertTime from '../../utils/convertTime';

const RadioGroup = Radio.Group
const RadioButton = Radio.Button


export class Matches extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeRound: 'round_16'
    }
  }

  handleRoundChange = e => {
    this.setState(
      {activeRound: e.target.value}
    )
  }
  
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <RadioGroup defaultValue={this.state.activeRound} onChange={this.handleRoundChange} style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center'}}>
        {this.props.data && Object.keys(this.props.data.knockout).map(round => (
          <RadioButton 
            style={{ textAlign: 'center', width: '100%'}}
            key={round}
            value={round}
            >{this.props.data.knockout[round].name}
          </RadioButton>
          )
        )}
        </RadioGroup>
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
