import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import SectionNoLine from './SectionNoLine'
import DescriptionText from './DescriptionText'

const styles = { buttonContainer: {  marginTop: 10 }}

const { buttonContainer } = styles
const TextSectionNoLine = ({ title, description, button }) => (description !== '' ? (
  <SectionNoLine title={title} >
    <DescriptionText description={description} />
    {button !== null ? <View style={buttonContainer}>{button}</View> : null}
  </SectionNoLine>
) : null)

TextSectionNoLine.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.element
}

TextSectionNoLine.defaultProps = {
  button: null
}

export default TextSectionNoLine
