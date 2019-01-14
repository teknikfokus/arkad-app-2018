import { connect } from 'react-redux'
import AboutScreen from '../screens/About/AboutScreen'

const mapStateToProps = state => ({
  aboutUs: state.aboutReducer.aboutUs,
  openingHours: state.aboutReducer.openingHours,
  aboutArkadTeam: state.aboutReducer.aboutArkadTeam,
  arkadTeam: state.aboutReducer.arkadTeam,
  theApp: state.aboutReducer.theApp
})

export default connect(mapStateToProps)(AboutScreen)
