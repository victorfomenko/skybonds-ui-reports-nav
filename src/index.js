import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import UIReportsNav from './UIReportsNav';
require('../node_modules/@skybonds/ui-styles/style.sass');

const rootEl = document.getElementById('root');

const props = {
  reports: [
    {
      id: '6867',
      name: 'reportName1reportName1reportName1'
    },
    {
      id: '6862',
      name: 'reportName2'
    },
    {
      id: '6863',
      name: 'reportName4'
    },
    {
      id: '686111',
      name: 'reportName4'
    },
    {
      id: '6864',
      name: 'reportName4'
    },
    {
      id: '68644',
      name: 'reportName4'
    },
    {
      id: '6865',
      name: 'reportName5'
    },
    {
      id: '6866',
      name: 'reportName6'
    },
    {
      id: '6867',
      name: 'reportName7',
      active: true
    },
    {
      id: '6868',
      name: 'reportName8'
    },
    {
      id: '6869',
      name: 'reportName9'
    }
  ],
  onRemoveReport: (id) => {
    console.log('onRemoveReport', id)
  },
  onRenameReport: (id, newName) => {
    console.log('onRenameReport', id, newName)
  },
  onSelectReport: (id) => {
    console.log('onSelectReport', id)
  }
};


ReactDOM.render(
  <AppContainer>
    <UIReportsNav
      reports={props.reports}
      onRemoveReport={props.onRemoveReport}
      onRenameReport={props.onRenameReport}
      onSelectReport={props.onSelectReport}
    />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./UIReportsNav', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./UIReportsNav').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp
          reports={props.reports}
          onRemoveReport={props.onRemoveReport}
          onRenameReport={props.onRenameReport}
          onSelectReport={props.onSelectReport}
        />
      </AppContainer>,
      rootEl
    );
  });
}
