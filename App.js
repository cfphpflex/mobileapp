// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const OverviewScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.time}>9:00</Text>
    </View>
    <View style={styles.main}>
      <Text style={styles.equityLabel}>Equity</Text>
      <Text style={styles.equityValue}>$998,534.64</Text>
      <Text style={styles.buyingPowerLabel}>Buying Power</Text>
      <Text style={styles.buyingPowerValue}>$1,997,069.28</Text>
      <View style={styles.positions}>
        <Text style={styles.positionsLabel}>Positions</Text>
        <View style={styles.positionRow}>
          <Text style={styles.positionTypeUp}>Up</Text>
          <Text style={styles.positionTypeValueUp}>0</Text>
          <Text style={styles.positionTypeValueUp}>$0.00</Text>
        </View>
        <View style={styles.positionRow}>
          <Text style={styles.positionTypeDown}>Down</Text>
          <Text style={styles.positionTypeValueDown}>0</Text>
          <Text style={styles.positionTypeValueDown}>$0.00</Text>
        </View>
      </View>
      <View style={styles.ordersToday}>
        <Text style={styles.ordersLabel}>Orders Today</Text>
        <View style={styles.orderRow}>
          <Text style={styles.orderType}>Open</Text>
          <Text style={styles.orderValue}>0</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderType}>Closed</Text>
          <Text style={styles.orderValue}>0</Text>
        </View>
      </View>
      <Text style={styles.disclosuresLabel}>Disclosures</Text>
    </View>
  </View>
);

const PositionsScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.time}>9:00</Text>
    </View>
    <View style={styles.main}>
      <Text style={styles.positionsLabel}>Positions</Text>
      <Text style={styles.disclosuresLabel}>Disclosures</Text>
    </View>
  </View>
);

const OrdersScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.time}>9:00</Text>
    </View>
    <View style={styles.main}>
      <Text style={styles.positionsLabel}>Orders</Text>
      <Text style={styles.disclosuresLabel}>Disclosures</Text>
    </View>
  </View>
);

const EmergencyScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.time}>9:00</Text>
    </View>
    <View style={styles.main}>
      <TouchableOpacity style={[styles.button, styles.suspendButton]}>
        <Text style={styles.buttonText}>SUSPEND API</Text>
      </TouchableOpacity>
      <Text style={styles.statusText}>Open Positions: 0</Text>
      <TouchableOpacity style={[styles.button, styles.liquidateButton]}>
        <Text style={styles.buttonText}>LIQUIDATE ALL</Text>
      </TouchableOpacity>
      <Text style={styles.statusText}>Open Orders: 0</Text>
      <TouchableOpacity style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>CANCEL ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>LOG OUT</Text>
      </TouchableOpacity>
      <Text style={styles.disclosuresLabel}>Disclosures</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Overview') {
              iconName = focused ? 'line-chart' : 'line-chart';
            } else if (route.name === 'Positions') {
              iconName = focused ? 'briefcase' : 'briefcase';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'exchange' : 'exchange';
            } else if (route.name === 'Emergency') {
              iconName = focused ? 'exclamation-triangle' : 'exclamation-triangle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'gold',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Positions" component={PositionsScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Emergency" component={EmergencyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  equityLabel: {
    fontSize: 18,
    color: '#333',
  },
  equityValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  buyingPowerLabel: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
  buyingPowerValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  positions: {
    marginTop: 20,
  },
  positionsLabel: {
    fontSize: 18,
    color: '#333',
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  positionTypeUp: {
    color: 'green',
    fontSize: 18,
  },
  positionTypeValueUp: {
    color: 'green',
    fontSize: 18,
  },
  positionTypeDown: {
    color: 'red',
    fontSize: 18,
  },
  positionTypeValueDown: {
    color: 'red',
    fontSize: 18,
  },
  ordersToday: {
    marginTop: 20,
  },
  ordersLabel: {
    fontSize: 18,
    color: '#333',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  orderType: {
    fontSize: 18,
    color: '#333',
  },
  orderValue: {
    fontSize: 18,
    color: '#333',
  },
  disclosuresLabel: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  suspendButton: {
    backgroundColor: 'red',
  },
  liquidateButton: {
    backgroundColor: '#ff6666',
  },
  cancelButton: {
    backgroundColor: '#ff9999',
  },
  logoutButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
});

export default App;
