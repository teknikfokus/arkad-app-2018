import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.arkadRed,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 14,
    color: '#fff'
  }
}

const { button, buttonText } = styles
const ClearAllFiltersButton = ({
  desiredProgramme,
  weOffer,
  clearCompanyFilter
}) => {
  const count = desiredProgramme.length + weOffer.length
  return count !== 0 ? (
    <TouchableHighlight style={button} onPress={() => clearCompanyFilter()}>
      <Text style={buttonText}>
        Clear all filters (
        {count}
        )
      </Text>
    </TouchableHighlight>
  ) : null
}

ClearAllFiltersButton.propTypes = {
  desiredProgramme: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  weOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  clearCompanyFilter: PropTypes.func.isRequired
}

export default ClearAllFiltersButton
