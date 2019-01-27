import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clearCompanyFilter } from '../actions/company'
import ClearAllFiltersButton from '../components/ClearAllFiltersButton'

const mapStateToProps = state => ({
  desiredProgramme: state.companyReducer.desiredProgramme,
  weOffer: state.companyReducer.weOffer,
  day: state.companyReducer.day,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCompanyFilter }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearAllFiltersButton)
