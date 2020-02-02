import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    borderBottomWidth: 2,
    borderColor: global.teknikfokusBlue
  }
}

const { content } = styles
const Line = ({ children }) => (
  <View style={content}>
    {children}
  </View>
)


export default Line
