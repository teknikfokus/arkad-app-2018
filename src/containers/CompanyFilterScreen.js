import { connect } from 'react-redux'
import CompanyFilterScreen from '../screens/Companies/CompanyFilterScreen'

const OUR_CUSTOM_FILTERS = {
  desiredProgramme: {
    children: [
      { name: 'Computer science' },
      { name: 'Information & communication techonology' },
      { name: 'Biomedical engineering' },
      { name: 'Electrical engineering' },
    ],
    id: 'desiredProgramme',
    name: 'Program'
  },
  weOffer: {
    children: [
      { name: 'Summer job' },
      { name: 'Part time positions' },
      { name: 'Master thesis' },
      { name: 'Full Time Employment' },
    ],
    id: 'weOffer',
    name: 'Offers'
  },
  day: {
    children: [
      { name: '18th of February' },
      { name: '19th of February' },
    ],
    id: 'day',
    name: 'Day of Fair'
  }
}

const mapStateToProps = state => {
  console.log(OUR_CUSTOM_FILTERS)
  return {
    // filters: state.apiReducer.filters
    filters: OUR_CUSTOM_FILTERS
  }
}

export default connect(mapStateToProps)(CompanyFilterScreen)
