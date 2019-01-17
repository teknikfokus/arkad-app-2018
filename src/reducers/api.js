import { Alert } from 'react-native'
import * as types from '../actions/types'

const initialState = {
  items: [],
  maps: [],
  filters: {},
  notUpdated: [],
  loading: false,
  error: '',
  updated: 0
}

const stringCleaner = string => (string ? string.toString().trim() : '')

const urlFormatter = url => (url.includes('http') || url === '' ? url : `http://${url}`)

const arrayCleaner = array => (array
  ? array.map(item => stringCleaner(item)).sort((a, b) => {
    const nameA = a.toLowerCase()
    const nameB = b.toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  : [])

const translateWords = (originalWord, id) => {
  const translations = {
    desiredProgramme: [
      { words: ['Datateknik'], translation: 'Computer Science and Engineering' },
      { words: ['Elektroteknik'], translation: 'Electrical Engineering' },
      {
        words: ['Informations- och kommunikationsteknik'],
        translation: 'Information and Communication Engineering'
      },
      { words: ['Medicin och teknik'], translation: 'Biomedical Engineering' }
    ],
    weOffer: [
      {
        words: ['Exjobb'],
        translation: 'Thesis'
      },
      {
        words: ['Traineeplatser'],
        translation: 'Trainee employment'
      },
      {
        words: ['Praktikplatser'],
        translation: 'Internships'
      },
      {
        words: ['Sommarjobb'],
        translation: 'Summer jobs'
      },
      {
        words: ['Utlandsmöjligheter'],
        translation: 'Foreign Opportunities'
      },
      {
        words: ['Extrajobb'],
        translation: 'Part-time job'
      }
    ]
  }

  let newWord
  translations[id].forEach((item) => {
    if (
      item.words.findIndex(word => originalWord.toLowerCase().trim() === word.toLowerCase())
        !== -1
      || originalWord.toLowerCase() === item.translation.toLowerCase()
    ) {
      newWord = item.translation
    }
  })
  return newWord || ''
}

const filterFormatter = (name, id, array) => {
  const children = Array.from(new Set(array))
    .map(item => ({
      name: item
    }))
    .sort((a, b) => {
      const nameA = a.toLowerCase()
      const nameB = b.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  return { name, id, children }
}

const apiReducer = (state = initialState, action) => {
  let filteredCompanies
  let maps = []
  let desiredProgramme = []
  let weOffer = []
  switch (action.type) {
    // case types.FETCH_COMPANIES_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: ''
    //   }
    // case types.FETCH_COMPANIES_SUCCESS:
    //   filteredCompanies = action.companies.filter(company => company.profile).map((item) => {
    //     const { profile } = item
    //     const company = {
    //       key: stringCleaner(item.id),
    //       name: stringCleaner(item.Company),
    //       about: stringCleaner(profile.aboutUs),
    //       didYouKnow: stringCleaner(profile.didYouKnow),

    //       employees: {
    //         local: stringCleaner(profile.employeesLocal),
    //         global: stringCleaner(profile.employeesGlobal)
    //       },

    //       weOffer: arrayCleaner(profile.weOffer)
    //         .map(word => translateWords(word, 'weOffer'))
    //         .filter(word => word !== ''),
    //       desiredProgramme: arrayCleaner(profile.desiredProgramme)
    //         .map(word => translateWords(word, 'desiredProgramme'))
    //         .filter(word => word !== ''),
        

    //       contact: {
    //         name: stringCleaner(profile.contactName),
    //         title: stringCleaner(profile.contactTitle),
    //         email: stringCleaner(profile.contactEmail),
    //         phone: stringCleaner(profile.contactPhone)
    //       },

    //       map: stringCleaner(profile.map),
    //       boothNumber: profile.boothNumber ? profile.boothNumber : 0,

    //       logotypeUrl: profile.logotype
    //         ? stringCleaner(profile.logotype.thumbs.large.replace('http://', 'https://'))
    //         : '',
    //       brochureUrl: profile.ad ? urlFormatter(stringCleaner(profile.ad.url)) : '',
    //       websiteUrl: urlFormatter(stringCleaner(profile.urlWebsite)),
    //       linkedInUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
    //       facebookUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
    //       twitterUrl: urlFormatter(stringCleaner(profile.urlTwitter)),
    //       youTubeUrl: urlFormatter(stringCleaner(profile.urlYouTube))
    //     }
    //     return company
    //   })
    //   filteredCompanies.map((company) => {
    //     maps = [...maps, company.map]
    //     desiredProgramme = [...desiredProgramme, ...company.desiredProgramme]
    //     weOffer = [...weOffer, ...company.weOffer]
    //     return company
    //   })
    //   maps = Array.from(new Set(maps))
    //     .sort((a, b) => {
    //       const nameA = a.toLowerCase()
    //       const nameB = b.toLowerCase()
    //       if (nameA < nameB) {
    //         return -1
    //       }
    //       if (nameA > nameB) {
    //         return 1
    //       }
    //       return 0
    //     })
    //     .filter(item => item !== '')
    //   desiredProgramme = filterFormatter('Programs', 'desiredProgramme', desiredProgramme)
    //   weOffer = filterFormatter('Offers', 'weOffer', weOffer)
    //   return {
    //     ...state,
    //     items: filteredCompanies,
    //     filters: {
    //       desiredProgramme,
    //       weOffer
    //     },
    //     maps,
    //     notUpdated: [],
    //     loading: false,
    //     updated: Math.floor(Date.now() / 1000)
    //   }
    // case types.FETCH_COMPANIES_FAILURE:
    //   Alert.alert(action.error)
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error
    //   }
    case types.FETCH_UPDATED_SINCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.FETCH_UPDATED_SINCE_SUCCESS:
      return {
        ...state,
        notUpdated: arrayCleaner(action.companyIds),
        loading: false
      }
    case types.FETCH_UPDATED_SINCE_FAILURE:
      Alert.alert(action.error)
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default apiReducer
