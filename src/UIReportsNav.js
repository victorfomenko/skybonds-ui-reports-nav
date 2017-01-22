import React, { Component } from 'react';
import Groups from './components/groups/Groups';
import List from './components/list/List';
import style from './reports.sass';

class UIReportsNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reports: props.reports || []
    };
  }

  render(){
    return (
      <div className={style.reports}>
        <Groups
          reports={this.props.reports}
        />
        <List
          reports={this.props.reports}
          onRemoveReport={this.props.onRemoveReport}
          onRenameReport={this.props.onRenameReport}
          onSelectReport={this.props.onSelectReport}
        />
      </div>
    );
  }
}

UIReportsNav.propTypes = {
  reports: React.PropTypes.array.isRequired,
  onRemoveReport: React.PropTypes.func.isRequired,
  onRenameReport: React.PropTypes.func.isRequired,
  onSelectReport: React.PropTypes.func.isRequired,
};

module.exports = UIReportsNav;