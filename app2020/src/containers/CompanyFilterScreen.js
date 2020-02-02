import { connect } from 'react-redux'
import CompanyFilterScreen from '../screens/Companies/CompanyFilterScreen'

const OUR_CUSTOM_FILTERS = {
  desiredProgramme: {
    children: [
      { name: 'Computer Science / InfoCom' },
      { name: 'Biomedical Engineering' },
      { name: 'Electrical Engineering' },
    ],
    id: 'desiredProgramme',
    name: 'Program'
  },
  weOffer: {
    children: [
      { name: 'Summer job' },
      { name: 'Extra job' },
      { name: 'Master thesis' },
      { name: 'Full Time Employment' },
    ],
    id: 'weOffer',
    name: 'Offers'
  },
  day: {
    children: [
      { name: '12 February' },
      { name: '13 February' },
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
