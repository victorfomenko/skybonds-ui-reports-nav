import React, { Component } from 'react';
import style from './groups.sass';


class Groups extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={style.groups}>'122135s5'</div>
    )
  }
}

Groups.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

export default Groups