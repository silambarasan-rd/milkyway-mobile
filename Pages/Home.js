import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListCustomerStatus from './ListCustomerStatus';
import moment from 'moment';
import {API_ENDPOINT} from '../constants';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';

const HomePage = ({navigation, globalCustomerList, updateCustomersList}) => {
  const currentMonth = moment().format('MMMM');

  const getAllCustomerList = () => {
    fetch(API_ENDPOINT + 'customers/getMonthlyCustomersReport', {method: 'GET'})
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          updateCustomersList(res.payload);
        }
      })
      .finally(() => {});
  };

  useEffect(() => {
    getAllCustomerList();
  }, []);

  const redirectToCustomerDetail = (customerData) => {
    getAllCustomerList();
    navigation.navigate('CustomerDetail', {customerData: customerData});
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.head_container}>
          <Image
            source={require('../Assets/images/logo.png')}
            style={styles.head_logo}
          />
          <View style={styles.head_content}>
            <Text style={styles.head_title}>Milkyway</Text>
            <Text style={styles.head_description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam amet architecto at consectetur
            </Text>
          </View>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body_container}>
            <View style={styles.section_head}>
              <Text style={styles.section_title}>
                Status of Current Month - {currentMonth}
              </Text>
            </View>
            {globalCustomerList && globalCustomerList.length > 0 ? (
              globalCustomerList.map((customerInfo) => {
                return (
                  <ListCustomerStatus
                    key={customerInfo.id}
                    title={customerInfo.customer_name}
                    status={customerInfo.payment_status}
                    quantity={customerInfo.payment_quantity}
                    unit={customerInfo.payment_unit}
                    clickHandler={() => redirectToCustomerDetail(customerInfo)}
                  />
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 20, fontWeight: '200'}}>
                  No Customers found!!
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    globalCustomerList: state.listCustomers.customerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCustomersList: (customerData) =>
      dispatch({
        type: 'GET_CUSTOMERS_LIST',
        customerData: customerData,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  head_container: {
    backgroundColor: '#3a3a3a',
    flex: 1,
    maxHeight: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,

    shadowColor: '#3f3f3f',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 0.41,

    elevation: 5,
  },
  head_logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  head_content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  head_title: {
    alignSelf: 'flex-start',
    color: Colors.light,
    fontSize: 22,
  },
  head_description: {
    alignSelf: 'flex-start',
    color: Colors.light,
    fontSize: 12,
    marginTop: 5,
  },
  body_container: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  section_head: {
    flex: 1,
    backgroundColor: '#008bd8',
    padding: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  section_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
