import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ListCustomerStatus = (props) => {
  const title = props.title;
  const status = props.status;

  function onClick() {
    props.clickHandler();
  }

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#DDDDDD"
      onPress={onClick}>
      <View style={styles.item_container}>
        <Text style={styles.item_customer_title}>{title}</Text>
        <Text
          style={{
            ...styles.item_payment_status,
            backgroundColor: status === 1 ? 'green' : 'red',
          }}>
          {status === 1 ? 'Paid' : 'Credit'}
        </Text>
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
