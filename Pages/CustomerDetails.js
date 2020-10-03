import React from 'react';
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
import moment from 'moment';

class CustomerDetails extends React.Component {
  state = {
    customerData: {},
  };

  componentDidMount() {
    const {route, navigation} = this.props;
    const {customerData} = route.params;
    this.setState(
      {
        customerData: customerData,
      },
      () => {
        navigation.setOptions({title: this.state.customerData.customerName});
      },
    );
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body_container}>
              <View style={styles.section_head}>
                <Text style={styles.section_title}>
                  {this.state.customerData.customerName}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default CustomerDetails;

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
