import React, { Component } from 'react';
import styles from './styles.sass';

export const GLYPHS = {
  MARKET: require('../../resources/icons/market.svg'),
  TRASH: require('../../resources/icons/trash.svg'),
};

export class Icon extends Component {
  render() {
    let glyph = this.props.glyph;
    return (
      <svg className={this.props.className ? this.props.className + ' svgIcon' : 'svgIcon'}
           onClick={this.props.onClick}
           width={this.props.width}
           height={this.props.height}
           dangerouslySetInnerHTML={{__html: '<use xlink:href="' + glyph + '"></use>'}}/>
    );
  }
}
