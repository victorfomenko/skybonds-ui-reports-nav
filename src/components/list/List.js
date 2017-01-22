import React, { Component } from 'react';
import style from './list.sass';


class List extends Component {
  constructor(props) {
    super(props);
    const reports = this.formatReportsState(props);
    this.state = { reports };
    this.onClickRemoveBtn = this.onClickRemoveBtn.bind(this);
    this.onClickEditBtn = this.onClickEditBtn.bind(this);
    this.onClickLiItem = this.onClickLiItem.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }


  componentWillReceiveProps(props){
    const reports = this.formatReportsState(props);
    this.setState({ reports })
  }


  formatReportsState(props){
    return props.reports.map((item)=>{
      item.disabled = true;
      item.active = item.active || false;
      return item
    })
  }


  onClickEditBtn(index) {
    var li =    document.querySelectorAll(`.${style.item}`)[index];
    var input = li.querySelector('input');

    var newReports = this.state.reports.map((item, reportIndex)=>{
      index === reportIndex ? item.disabled = false : item.disabled = true;
      return item
    });
    this.setState({reports: newReports});

    setTimeout(()=>{
      input.focus();
    },0);

    return newReports
  }


  onKeypressInput(e){
    if(e.which == 13) { e.currentTarget.blur() }
  }


  onBlurInput(e, id){
    const el = e.currentTarget;
    const newName = el.value;

    var newReports = this.state.reports.map((item) => {
      item.disabled = true;
      return item
    });

    this.setState({reports: newReports});
    this.props.onRenameReport(id, newName)
  }

  onClickRemoveBtn(id){
    const newReports = this.state.reports.filter( (item) => {
      return id !== item.id
    });
    this.setState({reports: newReports});
    this.props.onRemoveReport(id);
  }


  onChangeInput(e, id) {
    var newReports = this.state.reports.map((item) => {
      if(id === item.id) {item.name = e.target.value}
      return item
    });
    this.setState({reports: newReports});
  }


  onClickLiItem(e, id){
    const element = e.target;
    const hasClass = (el, cls) => {
      const className = el.getAttribute('class');
      return (` ${className} `).indexOf(` ${cls} `) > -1;
    };
    if(hasClass(element, style.icon)){return}

    var newReports = this.state.reports.map((item)=>{
      id === item.id ? item.active = true : item.active = false;
      return item
    });
    this.setState({reports: newReports});

    this.props.onSelectReport(id);
  }

  render(){
    var {reports} = this.state;
    var reportsList = reports.map((item, index) => {
      const activeClass = item.active ? ` ${style.active}` : '' ;
      return (
        <li className={`${style.item}${activeClass}`} key={index} onClick={(e)=>{this.onClickLiItem(e, item.id)}}>
          <svg className={`${style.icon} ${style.icon_market}`}>
            <use xlinkHref="#explorer-market"></use>
          </svg>
          <input
            type="text"
            value={item.name}
            disabled={item.disabled}
            onBlur={(e)=>{this.onBlurInput(e, item.id)}}
            onKeyPress={(e)=>{this.onKeypressInput(e)}}
            onChange={(e)=>{this.onChangeInput(e, item.id)}}
          />
          <span className={`${style.icon} ${style.icon_edit}`}
                onClick={()=>{this.onClickEditBtn(index)}}>
            edit</span>
          <svg className={`${style.icon} ${style.icon_trash}`}
               onClick={()=>{this.onClickRemoveBtn(item.id)}}>
            <use xlinkHref="#explorer-trash"></use>
          </svg>
        </li>
      )
    });
    console.log(reportsList);
    return (
      <div className={style.listBox}>
        <ul className={style.ul}>
          {reportsList}
        </ul>
      </div>
    )
  }
}


List.propTypes = {
  reports: React.PropTypes.array.isRequired,
  onRemoveReport: React.PropTypes.func.isRequired,
};

export default List