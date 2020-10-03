import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListCustomerStatus from './ListCustomerStatus';
import CustomerModel from '../Models/CustomerModel';
import moment from 'moment';
import {API_ENDPOINT} from '../constants';

const HomePage = ({navigation}) => {
  let initialArr: CustomerModel = [];
  const [listCustomers, setCustomerData] = useState([]);
  const currentMonth = moment().format('MMMM');

  const getAllCustomerList = () => {
    fetch(API_ENDPOINT + 'customers/getAllCustomers', {method: 'GET'})
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => res.json())
      .then((res) => {
        setCustomerData(res.payload);
      });
  };

  useEffect(() => {
    getAllCustomerList();
    // fetch('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.movies))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
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

            {listCustomers.map((customerInfo) => {
              return (
                <ListCustomerStatus
                  key={customerInfo.id}
                  title={customerInfo.customerName}
                  status={customerInfo.customerStatus}
                  clickHandler={() => redirectToCustomerDetail(customerInfo)}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomePage;

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
