import React from 'react';
import Helmet from 'react-helmet';
import AddAgentComponent from '../components/AddAgent'

export default () => {
  return (
    <div>
      <Helmet title="Add agent"/>
      <AddAgentComponent />
    </div>
  );
}
