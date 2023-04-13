import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

const UPDATE_CUSTOMER_MUTATION = gql`
  mutation UpdateCustomer($id: ID!, $name: String, $email: String, $phone: String) {
    updateCustomer(id: $id, name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

function UpdateCustomerForm() {
  let idInput, nameInput, emailInput, phoneInput;
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER_MUTATION);

  return (
    <div>
      <h2>Update Customer</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateCustomer({
            variables: {
              id: idInput.value,
              name: nameInput.value,
              email: emailInput.value,
              phone: phoneInput.value,
            },
          });
          idInput.value = '';
          nameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
        }}
      >
        <label>
          ID:
          <input ref={node => (idInput = node)} />
        </label>
        <label>
          Name:
          <input ref={node => (nameInput = node)} />
        </label>
        <label>
          Email:
          <input ref={node => (emailInput = node)} />
        </label>
        <label>
          Phone:
          <input ref={node => (phoneInput = node)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateCustomerForm;
