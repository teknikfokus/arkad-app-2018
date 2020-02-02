import React from 'react'
import { TouchableOpacity, Linking, Text } from 'react-native'
import PropTypes from 'prop-types'


const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  text: { fontSize: 16, color: '#fff' }
}

const openUrl = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url)
      } else {
        Alert.alert(`Could not open URL: ${this.url}`)
      }
    })
    .catch(err => Alert.alert(`Could not open URL: ${err}`))
}

const { button, text } = styles
const FaqButton = ({ navigation }) => (
  <TouchableOpacity style={button} onPress={() => openUrl('https://www.teknikfokus.se/FAQ.html')}>
    <Text style={text}>FAQ</Text>
  </TouchableOpacity>
)

FaqButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default FaqButton
