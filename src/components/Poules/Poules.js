import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Radio } from 'antd'
import * as actions from '../../store/actions';
import convertTime from '../../utils/convertTime';

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

export class Poules extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeGroup: 'a'
    }
  }

  handleGroupChange = e => {
    this.setState(
      {activeGroup: e.target.value}
    )
  }

  render() {
    return (
      <div>
      <h1>Poules</h1>
      <RadioGroup onChange={this.handleGroupChange} defaultValue={this.state.activeGroup} style={{display: 'flex', flexFlow: 'row wrap'}}>
        {this.props.data && Object.keys(this.props.data.groups).map(groupName => (
          <RadioButton
          style={{width: '25%', textAlign: 'center'}}
            key={groupName}
            value={groupName}
            >{groupName.toUpperCase()}
          </RadioButton>
          )
        )}
        </RadioGroup>
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
