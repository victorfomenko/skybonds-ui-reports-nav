import React, { Component } from 'react';
import { Icon, GLYPHS } from '../../components/Icons';
import reportsStyle from '../../reports.sass';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = this.formatState(props);
    this.onClickRemoveBtn = this.onClickRemoveBtn.bind(this);
    this.onClickEditBtn = this.onClickEditBtn.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickInput = this.onClickInput.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState((prevState, props)=>{
      return {
        ...prevState,
        id: props.id,
        name: props.name,
        disabled: props.disabled,
        active: props.active,
        discussToken: props.discussToken,
        discussUnseen: props.discussUnseen
      }
    })
  }

  formatState(props){
    return {
      id: props.id,
      name: props.name,
      disabled: props.disabled,
      active: props.active,
      discussToken: props.discussToken,
      discussUnseen: props.discussUnseen
    }
  }

  onClickEditBtn(e) {
    var li =    e.currentTarget.parentNode;
    var input = li.querySelector('input');

    this.setState({disabled: false});

    setTimeout(()=>{
      input.focus();
    },0);

    return true
  }


  onClickInput(e){
    e.stopPropagation();
  }


  onKeypressInput(e){
    if(e.which == 13) { e.currentTarget.blur() }
  }


  onBlurInput(e){
    const el = e.currentTarget;
    const newName = el.value;

    this.setState({disabled: true});
    this.props.onChange(this.state);
    this.props.onRenameReport(this.state.id, newName)
  }


  onClickRemoveBtn(){
    this.props.onClickRemoveBtn(this.state.id)
  }


  onChangeInput(e) {
    const name = e.target.value;
    this.setState({ name });
  }


  render(){
    const name = this.state.name;
    const disabled = this.state.disabled;
    const activeClass = this.state.active ? ` ${reportsStyle.active}` : '' ;
    const discussToken = this.state.discussToken;
    const discussUnseen = this.state.discussUnseen;

    let discussionIcon = null;
    if (discussToken.length) {
        discussionIcon = (
            <svg className={`${reportsStyle.icon} ${reportsStyle.icon_messenger}`}>
                {/*<use xlinkHref="#explorer-market"></use>*/}
                <use xlinkHref="/static/icons/sprite.svg#messenger"></use>
            </svg>
        );
    }

    return(
      <li className={`${reportsStyle.item}${activeClass}`} onClick={(e)=>{this.props.onClick(e, this.state.id)}}>
        <Icon className={`${reportsStyle.icon} ${reportsStyle.icon_market}`} glyph={GLYPHS.MARKET} />
        { discussionIcon }
        <span className={`${reportsStyle.unseen}`}>{discussUnseen}</span>
        <input
          type="text"
          value={name}
          disabled={disabled}
          onBlur={this.onBlurInput}
          onKeyPress={this.onKeypressInput}
          onChange={this.onChangeInput}
          onClick={this.onClickInput}
        />
        <span className={`${reportsStyle.icon} ${reportsStyle.icon_edit}`}
              onClick={this.onClickEditBtn}>
            edit</span>

        <Icon
          className={`${reportsStyle.icon} ${reportsStyle.icon_trash}`}
          onClick={this.onClickRemoveBtn}
          glyph={GLYPHS.TRASH} width="9px" height="9px" />

      </li>
    )
  }
}


ListItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  onRenameReport: React.PropTypes.func.isRequired,
  onClickRemoveBtn: React.PropTypes.func.isRequired
};

export default ListItem
