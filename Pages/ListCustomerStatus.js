import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {Text} from 'react-native-elements';

const ListCustomerStatus = (props) => {
  const title = props.title;
  const status = props.status;
  const quantity = props.quantity;
  const unit = props.unit;

  function onClick() {
    props.clickHandler();
  }

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#DDDDDD"
      onPress={onClick}>
      <View style={styles.item_container}>
        <View>
          <Text h5 style={styles.item_customer_title}>{title}</Text>
          {quantity ? (
            <Text style={{fontSize: 12}}>Qty: {quantity + unit}</Text>
          ) : null}
        </View>
        <View>
          <Text
            style={{
              ...styles.item_payment_status,
              backgroundColor: status === 1 ? 'green' : 'red',
            }}>
            {status === 1 ? 'Paid' : 'Credit'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListCustomerStatus;

const styles = StyleSheet.create({
  item_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  item_customer_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item_payment_status: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 12,
    textTransform: 'capitalize',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
