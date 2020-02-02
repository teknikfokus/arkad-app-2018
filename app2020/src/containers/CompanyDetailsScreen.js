import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleChangeMap, toggleChangeCompany } from '../actions/map'
import toggleFavorite from '../actions/favorite'
import CompanyDetailsScreen from '../screens/Companies/CompanyDetailsScreen'

const mapStateToProps = state => ({
  favorites: state.favoriteReducer.favorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeMap, toggleChangeCompany, toggleFavorite }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetailsScreen)
