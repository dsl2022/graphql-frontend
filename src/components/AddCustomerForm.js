import React, { useRef } from 'react';
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

const ADD_CUSTOMER_MUTATION = gql`
  mutation AddCustomer($name: String!, $email: String!, $phone: String!) {
    addCustomer(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

function AddCustomerForm() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);

  const [addCustomer] = useMutation(ADD_CUSTOMER_MUTATION, {
    update(cache, { data: { addCustomer } }) {
      const { customers } = cache.readQuery({ query: CUSTOMERS_QUERY });
      cache.writeQuery({
        query: CUSTOMERS_QUERY,
        data: { customers: customers.concat([addCustomer]) },
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addCustomer({
      variables: {
        name: nameInput.current.value,
        email: emailInput.current.value,
        phone: phoneInput.current.value,
      },
    });
    nameInput.current.value = '';
    emailInput.current.value = '';
    phoneInput.current.value = '';
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameInput} />
        </label>
        <label>
          Email:
          <input type="email" ref={emailInput} />
        </label>
        <label>
          Phone:
          <input type="tel" ref={phoneInput} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCustomerForm;
