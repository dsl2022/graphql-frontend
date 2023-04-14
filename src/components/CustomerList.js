import React from 'react';
import { useQuery, gql } from '@apollo/react-hooks';
// TODO define query
const CUSTOMERS_QUERY = gql`
`;

function CustomerList() {
  // define useQuery hook  
  
  return (
    <div>
      <ul>
        {/* add list of customers */}
      </ul>
    </div>
  );
}

export default CustomerList;
