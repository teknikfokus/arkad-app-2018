import { connect } from 'react-redux'
import CompanyFilterScreen from '../screens/Companies/CompanyFilterScreen'

const OUR_CUSTOM_FILTERS = {
  desiredDegree: {
    children: [],
    id: 'desiredDegree',
    name: 'Degrees'
  },
  desiredProgramme: {
    children: [
      { name: 'Computer Science / InfoCom' },
      { name: 'Biomedical Engineering' },
      { name: 'Electrical Engineering' },
    ],
    id: 'desiredProgramme',
    name: 'Programs'
  },
  industry: {
    children: [],
    id: 'industry',
    name: 'Industries'
  },
  weOffer: {
    children: [
      { name: 'Summer job' },
      { name: 'Master thesis' },
      { name: 'Trainee programs' },
    ],
    id: 'weOffer',
    name: 'Offers'
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
