import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const SelectableListItem = ({ children, navigation, item }) => (
  <TouchableHighlight
    underlayColor={global.rowSelectionColor}
    onPress={() => navigation.navigate('Detail', { item })}
  >
    <View>
      <ListItem>{children}</ListItem>
    </View>
  </TouchableHighlight>
)

// SelectableListItem.propTypes = {
//   children: PropTypes.node.isRequired,
//   navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
//   item: PropTypes.shape({
//     Company: PropTypes.string.isRequired    .. wants Company for company-page and name for event.
//   }).isRequired
// }

export default SelectableListItem
