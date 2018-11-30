import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import SelectableListItem from './SelectableListItem'

const styles = {
  timeContainer: {
    width: 45,
    paddingRight: 8,
    marginRight: 8,
    borderRightWidth: 1,
    borderColor: global.teknikfokusBlue
  },
  infoContainer: { flexDirection: 'column', flex: 1 },
  time: {
    textAlign: 'right',
    fontSize: 12
  },
  title: {
    flex: 1,
    fontSize: 16
  },
  subtitle: { flex: 1, fontSize: 14, color: global.subtitleColor }
}

const {
  timeContainer, infoContainer, time, title, subtitle
} = styles
const EventListItem = ({ navigation, item }) => (
  <SelectableListItem navigation={navigation} item={item}>
    <View style={timeContainer}>
      <Text style={time}>{item.startTime}</Text>
      <Text style={time}>{item.endTime}</Text>
    </View>
    <View style={infoContainer}>
      <Text style={title}>{item.name}</Text>
      <Text style={subtitle}>{item.location}</Text>
    </View>
  </SelectableListItem>
)

EventListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    signUpURL: PropTypes.string.isRequired
  }).isRequired
}

export default EventListItem
