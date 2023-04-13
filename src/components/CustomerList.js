import React from 'react';
import { useQuery, gql } from '@apollo/react-hooks';

const CUSTOMERS_QUERY = gql`
  query {
    customers {
      id
      name
      email
      phone
    }
  }
`;

function CustomerList() {
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log({data})
  return (
    <div>
      <ul>
        {data.customers.map(customer => (
          <li key={customer.id}>
            {customer.name} ({customer.email}, {customer.phone})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
