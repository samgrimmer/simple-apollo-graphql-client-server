import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MyDetails from './myDetails';

const GET_MY_DETAILS = gql`
  {
    myName
    myAddress
  }
`;

const Demo = () => (
  <Query query={GET_MY_DETAILS}>
    {result => {
      const { loading, error, data } = result;

      if (loading) {
        return <div>Loading</div>;
      }
      if (error) {
        return <div>Error</div>;
      }

      return <MyDetails data={data} />;
    }}
  </Query>
);

export default Demo;
