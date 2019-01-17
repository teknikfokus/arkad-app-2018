import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const { text } = styles
const BoldText = ({ description }) => <Text style={text}>{description}</Text>

BoldText.propTypes = {
  description: PropTypes.string.isRequired
}

export default BoldText
