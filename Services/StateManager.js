import {createStore} from 'redux';

const initialState = {
  customerData: [],
};

const reducer = (state = initialState, action) => {
    switch (action) {
        case 'SET_CUSTOMER_DATA':

    }
  return state;
};

const store = createStore(reducer);
