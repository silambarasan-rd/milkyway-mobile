const initialState = {
  customerData: [],
};

export const ListCustomers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CUSTOMERS_LIST':
      return {customerData: action.customerData};
    default:
      return state;
  }
};
