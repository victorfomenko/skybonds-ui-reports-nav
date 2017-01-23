import React, { Component } from 'react';
import ListItem from '../list/ListItem';


class Mini extends Component {
  constructor(props) {
    super(props);
    this.state = this.formatState(props);
  }

  componentWillReceiveProps(props){
    const state = this.formatReportsState(props);
    this.setState(state)
  }

  formatState(props){
    var id = props.reports[0].id,
        name = props.reports[0].name,
        disabled = props.reports[0].disabled || true,
        active = props.reports[0].active || false;

    props.reports.forEach((item) => {
      if(item.active){
        id = item.id;
        name = item.name;
        disabled = item.disabled || true;
        active = item.active || false;
      }
    });
    return { id, name, disabled, active }
  }


  render(){
    return (
      <ListItem
        id={this.state.id}
        name={this.state.name}
        active={this.state.active}
        disabled={this.state.disabled}
        onRenameReport={this.props.onRenameReport}
        onClickRemoveBtn={this.props.onClickRemoveBtn}
      />
    )
  }
}



Mini.propTypes = {
  reports: React.PropTypes.array.isRequired,
  onRemoveReport: React.PropTypes.func.isRequired,
  onRenameReport: React.PropTypes.func.isRequired,
  onSelectReport: React.PropTypes.func.isRequired,
};

export default Mini