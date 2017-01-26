import React, { Component } from 'react';
import ListItem from './ListItem';
import reportsStyle from '../../reports.sass';


class List extends Component {
  constructor(props) {
    super(props);
    const reports = this.formatReportsState(props);
    this.state = { reports };
    this.onClickRemoveBtn = this.onClickRemoveBtn.bind(this);
    this.onClickLiItem = this.onClickLiItem.bind(this);
  }

  componentWillReceiveProps(props){
    const reports = this.formatReportsState(props);
    this.setState({ reports })
  }

  formatReportsState(props){
    return props.reports.map((item)=>{
      item.disabled = true;
      item.active = item.active || false;
      item.discussToken = item.discussToken || '';
      item.discussUnseen = item.discussUnseen || null;
      return item
    })
  }


  onClickRemoveBtn(id){
    const newReports = this.state.reports.filter( (item) => {
      return id !== item.id
    });
    this.setState({reports: newReports});
    this.props.onRemoveReport(id);
  }


  onClickLiItem(e, id){

    const element = e.target;
    const hasClass = (el, cls) => {
      const className = el.getAttribute('class');
      return (` ${className} `).indexOf(` ${cls} `) > -1;
    };
    if(hasClass(element, reportsStyle.icon)){return}

    var newReports = this.state.reports.map((item)=>{
      id === item.id ? item.active = true : item.active = false;
      return item
    });

    this.setState({reports: newReports});

    this.props.onSelectReport(id);
  }


  render(){
    var reports = this.state.reports;
    var reportsList = reports.map((item, index) => {
      return (
        <ListItem
          onClick={this.onClickLiItem}
          key={index}
          active = {item.active}
          disabled = {item.disabled}
          discussToken = {item.discussToken}
          discussUnseen = {item.discussUnseen}
          name = {item.name}
          id = {item.id}
          onRenameReport = {this.props.onRenameReport}
          onClickRemoveBtn = {this.onClickRemoveBtn}
          onChange={ (value) => {
            const newReports = reports.map((item)=>{
              if(value.id === item.id) {
                item.name = value.name
              }
              return item
            });
            this.setState({reports:  newReports});
            }
          }
        />
      )
    });
    return (
      <div className={reportsStyle.listBox}>
        <ul className={reportsStyle.ul}>
          {reportsList}
        </ul>
      </div>
    )
  }
}


List.propTypes = {
  reports: React.PropTypes.array.isRequired,
  onRemoveReport: React.PropTypes.func.isRequired,
  onRenameReport: React.PropTypes.func.isRequired,
  onSelectReport: React.PropTypes.func.isRequired,
};

export default List