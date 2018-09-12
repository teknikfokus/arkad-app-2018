import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../selection.json'
import MapScreen from './screens/Map/MapScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import EventsScreenContainer from './containers/EventsScreen'
import AboutScreen from './screens/About/AboutScreen'

const ArkadIcon = createIconSetFromFontello(fontelloConfig)

const Router = createBottomTabNavigator(
  {
    Map: {
      screen: createStackNavigator({
        MapStack: {
          screen: MapScreen,
          navigationOptions: {
            title: 'MapScreen'
          }
        }
      })
    },
    Companies: {
      screen: createStackNavigator({
        CompanyStack: {
          screen: CompaniesScreenContainer,
          navigationOptions: {
            title: 'Companies'
          }
        }
      })
    },
    Events: {
      screen: createStackNavigator({
        EventStack: {
          screen: EventsScreenContainer,
          navigationOptions: {
            title: 'Events'
          }
        }
      })
    },
    About: {
      screen: createStackNavigator({
        AboutStack: {
          screen: AboutScreen,
          navigationOptions: {
            title: 'About'
          }
        }
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // TODO: Solve problem with props validation
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Map') {
          iconName = 'map-o'
        } else if (routeName === 'Companies') {
          iconName = 'briefcase'
        } else if (routeName === 'Events') {
          iconName = 'calendar-check-o'
        } else if (routeName === 'About') {
          return <ArkadIcon name="arkadlogo" size={26} color={tintColor} />
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      }
    })
  }
)

export default Router
