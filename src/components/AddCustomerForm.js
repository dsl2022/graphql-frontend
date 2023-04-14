import React, { useRef } from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

// TODO define query and
const CUSTOMERS_QUERY = gql``;

const ADD_CUSTOMER_MUTATION = gql``;

function AddCustomerForm() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
// complete useMutation function
  const [addCustomer] = useMutation(ADD_CUSTOMER_MUTATION, {   
  });



  return (
    <div>
      <h2>Add Customer</h2>
      {/* define form */}
    </div>
  );
}

export default AddCustomerForm;
