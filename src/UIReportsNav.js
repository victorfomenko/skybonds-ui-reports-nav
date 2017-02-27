import React, { Component } from 'react';
import Groups from './components/groups/Groups';
import List from './components/list/List';
import Mini from './components/mini/Mini';
import style from './reports.sass';

class UIReportsNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reports: props.reports,
      open: false
    };
    this.onReportsClick = this.onReportsClick.bind(this);
    this.addListener();
  }

  componentWillReceiveProps(nextProps){
    this.setState({ reports: nextProps.reports });
  }


  onReportsClick(e){
    e.stopPropagation();
    var target = e.target;
    var currentTarget = e.currentTarget;
    if(this.hasClass(target, style.icon) || this.hasClass(currentTarget, style.reports_open)){return}

    this.setState({open: true});
  }


  addListener(){
    window.onclick = () => {
      var element = document.querySelector(`.${style.reports_open}`);
      if(element !== null){
        this.setState({open: false});
      }
    }
  }


  hasClass(el, cls){
    const className = el.getAttribute('class');
    return (` ${className} `).indexOf(` ${cls} `) > -1;
  }

  render(){
    const openClass = `${style.reports} ${this.state.open ? style.reports_open : ''}`;
    return (
      <div className={openClass} onClick={this.onReportsClick}>
        <Groups
          reports={this.state.reports}
        />
        {/*<Mini*/}
          {/*reports={this.props.reports}*/}
          {/*onRemoveReport={this.props.onRemoveReport}*/}
          {/*onRenameReport={this.props.onRenameReport}*/}
          {/*onSelectReport={this.props.onSelectReport}*/}
        {/*/>*/}
        <List
          reports={this.state.reports}
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

export default UIReportsNav;