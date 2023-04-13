import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

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

const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomer($id: ID!) {
    deleteCustomer(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

function DeleteCustomerForm() {
  let idInput;
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
    update(cache, { data: { deleteCustomer } }) {
      const { customers } = cache.readQuery({ query: CUSTOMERS_QUERY });
      cache.writeQuery({
        query: CUSTOMERS_QUERY,
        data: { customers: customers.filter(customer => customer.id !== deleteCustomer.id) },
      });
    },
  });

  return (
    <div>
      <h2>Delete Customer</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteCustomer({
            variables: {
              id: idInput.value,
            },
          });
          idInput.value = '';
        }}
      >
        <label>
          ID:
          <input ref={node => (idInput = node)} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCustomerForm;
