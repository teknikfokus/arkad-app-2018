import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ApiLoadingViewContainer from '../../containers/ApiLoadingView'
import OverviewMap from '../../containers/OverviewMap'
import DisplayImage from '../../components/DisplayImage'
import SectionHeader from '../../components/SectionHeader'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  }
}

const { container } = styles
const MapScreen = ({ navigation }) => (
  <View style={container}>
    <DisplayImage source={require('../../../resources/img/KartaTekFok.png')} />
    {/* <ApiLoadingViewContainer />
    <OverviewMap navigation={navigation} /> */}
  </View>
)

MapScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default MapScreen
