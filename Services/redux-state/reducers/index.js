import {combineReducers} from 'redux';

import {ListCustomers} from './ListCustomer';

export default combineReducers({
  listCustomers: ListCustomers,
});
