import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StringSimilarity from 'string-similarity'
import { loadCompanies } from '../actions/api'
import { toggleShowFavorites, searchCompany } from '../actions/company'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const filterCategories = (items, desiredProgramme, weOffer, day) => {
  let companies = items
  companies = companies.filter(
    item => (
      desiredProgramme.length !== 0 ? item['Interested in'].includes(desiredProgramme) : true)
      && (weOffer.length !== 0 ? item['Offer'].includes(weOffer) : true)
      && (day.length !== 0 ? item['Day'].includes(day) : true)

  )
  return companies
}
// item.desiredProgramme.some(element => desiredProgramme.includes(element)) : true)

const filterFavoritesAndSearch = (items, showFavorites, favorites, searchText) => {
  let companies = items
  companies = showFavorites ? items.filter(company => favorites.indexOf(company.key) !== -1) : items
  if (searchText === '') {
    return companies.sort((a, b) => {
      const nameA = a.Company.toLowerCase()
      const nameB = b.Company.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }
  const append = '$$' // Append a $ to improve the search, otherwise one character matches are ignored
  const { ratings } = StringSimilarity.findBestMatch(
    append + searchText,
    items.map(item => append + item.Company)
  )
  companies = companies
    .map((item) => {
      const rating = ratings.find(value => value.target === append + item.Company)
      const sortedItem = { ...item, rating: rating.rating }
      return sortedItem
    })
    .filter(item => item.rating !== 0)
    .sort((a, b) => b.rating - a.rating)
  return companies
}

// TODO: after companyList enter all Teknikfokus-companies 

const mapStateToProps = state => ({
  companyList: filterFavoritesAndSearch(
    filterCategories(
      require('../../resources/companyInfoTF').default,
      state.companyReducer.desiredProgramme,
      state.companyReducer.weOffer,
      state.companyReducer.day,
    ),
    state.companyReducer.showFavorites,
    state.favoriteReducer.favorites,
    state.companyReducer.searchText
  ),
  searchText: state.companyReducer.searchText,
  showFavorites: state.companyReducer.showFavorites,
  refreshing: state.companyReducer.refreshing
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, toggleShowFavorites, searchCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
