import React, { Component } from 'react';
import Groups from './components/groups/Groups';
import List from './components/list/List';
import Mini from './components/mini/Mini';
import style from './reports.sass';

class UIReportsNav extends Component {

  constructor(props) {
    super(props);
    this.onReportsClick = this.onReportsClick.bind(this);
    this.addListener();
  }

  onReportsClick(e){
    this.expandReportNav(e)
  }

  addListener(){
    window.onclick = (e) => {
      var element = document.querySelector(`.${style.reports}`);
      var newClassName = element.className.replace(`${style.reports_open}`, '');
      element.className = newClassName;
    }
  }

  expandReportNav(e){
    e.stopPropagation();
    var target = e.target;
    if(this.hasClass(target, style.icon) || this.hasClass(target, style.reports_open)){return}

    var currentTarget = e.currentTarget;
    currentTarget.className = `${currentTarget.className} ${style.reports_open}`;
  }

  hasClass(el, cls){
    const className = el.getAttribute('class');
    return (` ${className} `).indexOf(` ${cls} `) > -1;
  }

  render(){
    return (
      <div className={style.reports} onClick={this.onReportsClick} onBlur={this.onBlur}>
        <Groups
          reports={this.props.reports}
        />
        {/*<Mini*/}
          {/*reports={this.props.reports}*/}
          {/*onRemoveReport={this.props.onRemoveReport}*/}
          {/*onRenameReport={this.props.onRenameReport}*/}
          {/*onSelectReport={this.props.onSelectReport}*/}
        {/*/>*/}
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