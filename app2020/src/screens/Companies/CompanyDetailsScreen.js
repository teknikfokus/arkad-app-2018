import React, { Component } from 'react'
import { TouchableOpacity, Linking, Alert, Image } from 'react-native'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actionsheet'
import Icon from 'react-native-vector-icons/Feather'
import Section from '../../components/text/Section'
import DetailsScreen from '../../components/DetailsScreen'
import DisplayImage from '../../components/DisplayImage'
import TextSection from '../../components/text/TextSection'
import TextArraySection from '../../components/text/TextArraySection'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'
import Button from '../../components/Button'

const styles = {
  headerIcon: {
    paddingRight: 8
  }
}

class CompanyDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { headerIcon } = styles
    return {
      title: navigation.state.params.item.name
    }
  }

  render() {
    const {
      navigation
    } = this.props
    const company = navigation.state.params.item

    let contactInfo = ''
    if (company['Name of contact person'] !== '') {
      contactInfo = company['Name of contact person'] + "\n"
    }
    contactInfo += company['Email of contact person']

    return (
      <DetailsScreen>
        <DisplayImage source={company['Logo-fileName']} />
        
        <TextSection title={`About ${company.Company}`} description={company['AboutCompany']} />

        <TextSection title="Attending the fair" description={company['Day']} />

        <TextArraySection title="We offer" descriptionArray={[company.Offer]} />
        <TextArraySection title="Desired programme" descriptionArray={[company['Interested in']]} />

        
        <TextSection title="Office locations" description={company['OfficeLocation']} />


        { company['SustainabilityWork'] !== '' && <TextSection title="Sustainability" description={company['SustainabilityWork']} /> }


        { contactInfo !== '' && <TextSection title="Contact" description={contactInfo}/>}
          
      </DetailsScreen>
    )
  }
}

CompanyDetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleChangeMap: PropTypes.func.isRequired,
  toggleChangeCompany: PropTypes.func.isRequired
}

export default CompanyDetailsScreen
