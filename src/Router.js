import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../selection.json'
import SubtitleHeader from './components/SubtitleHeader'
import MapActionSheet from './containers/MapActionSheet'
import ShowFavoritesButton from './containers/ShowFavoritesButton'
import FaqButton from './components/FaqButton'
import MapScreen from './screens/Map/MapScreen'
import HouseScreenContainer from './containers/HouseScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import CompanyDetailsScreenContainer from './containers/CompanyDetailsScreen'
import CompanyFilterScreenContainer from './containers/CompanyFilterScreen'
import EventsScreenContainer from './containers/EventsScreen'
import EventDetailsScreen from './screens/Events/EventDetailsScreen'
import AboutScreenContainer from './containers/AboutScreen'
import ArkadTeamScreenContainer from './containers/ArkadTeamScreen'
import FaqScreenContainer from './containers/FaqScreen'

const styles = {
  headerIcon: { paddingHorizontal: 14 }
}

const navigationOptions = {
  headerStyle: {
    backgroundColor: global.teknikfokusBlue
  },
  headerTintColor: '#fff'
}

const ArkadIcon = createIconSetFromFontello(fontelloConfig)

const MainStack = createBottomTabNavigator(
  {
    Map: {
      screen: createStackNavigator(
        {
          MapStack: {
            screen: MapScreen,
            navigationOptions: {
              ...navigationOptions,
              headerTitle: <SubtitleHeader title="Teknikfokus area and some more" subtitle="Click on a building" />
            }
          },
          House: {
            screen: HouseScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              headerTitle: <MapActionSheet />
            }
          },
          CompanyDetails: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    },
    Companies: {
      screen: createStackNavigator(
        {
          CompanyStack: {
            screen: CompaniesScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: 'TEKNIKFOKUS',
              headerRight: (
                <TouchableOpacity
                  style={styles.headerIcon}
                  onPress={() => navigation.navigate('Filter')}
                >
                  <Icon name="filter" size={24} color="#fff" />
                </TouchableOpacity>
              ),
              headerLeft: <ShowFavoritesButton />
            })
          },
          Detail: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    },
    Events: {
      screen: createStackNavigator(
        {
          EventStack: {
            screen: EventsScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              title: 'Events'
            }
          },
          Detail: {
            screen: EventDetailsScreen,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    },
    About: {
      screen: createStackNavigator(
        {
          AboutStack: {
            screen: AboutScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: 'About',
              headerRight: <FaqButton navigation={navigation} />
            })
          },
          ArkadTeam: {
            screen: ArkadTeamScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'The ARKAD team'
            })
          },
          Faq: {
            screen: FaqScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'FAQ',
              headerStyle: {
                ...navigationOptions.headerStyle,
                borderBottomWidth: 0
              }
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Disable unnecessary eslint warning
      // eslint-disable-next-line react/prop-types
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
          iconName = 'info-circle'
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: global.teknikfokusBlue,
        style: {
          borderTopWidth: 2,
          borderTopColor: global.teknikfokusBlue
        }
      }
    })
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        header: null
      }
    },
    Filter: {
      screen: CompanyFilterScreenContainer,
      navigationOptions: ({ navigation }) => ({
        ...navigationOptions,
        title: 'Filter',
        headerLeft: null,
        headerRight: (
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
            <Icon name="angle-down" size={34} color="#fff" />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    mode: 'modal',
    cardStyle: { backgroundColor: global.arkadGray }
  }
)

export default RootStack
