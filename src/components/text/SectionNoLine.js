import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    paddingVertical: 8,
    backgroundColor: '#fff',
    
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  }
}

const { content, sectionTitle } = styles
const SectionNoLine = ({ children, title }) => (
  <View style={content}>
    <Text style={sectionTitle}>{title}</Text>
    {children}
  </View>
)

SectionNoLine.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default SectionNoLine
