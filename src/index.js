import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
require('../node_modules/@skybonds/ui-styles/style.sass');

const rootEl = document.getElementById('root');

const props = {
  reports: [
    {
      id: '686119',
      name: 'reportName1re'
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
      name: 'reportName6',
      discussToken: 'abc',
      discussUnseen: 5
    },
    {
      id: '6867',
      name: 'reportName7',
      active: true,
      discussToken: 'cde',
      discussUnseen: 92
    },
    {
      id: '6868',
      name: 'reportName8'
    },
    {
      id: '6869',
      name: 'reportName9',
      discussToken: 'bcd',
      discussUnseen: 0
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
    <Root
      reports={props.reports}
      onRemoveReport={props.onRemoveReport}
      onRenameReport={props.onRenameReport}
      onSelectReport={props.onSelectReport}
    />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot
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
