import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import DisplayImage from '../../components/DisplayImage'
import TextSection from '../../components/text/TextSection'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'
import Button from '../../components/Button'
import ArkadTeamListItem from '../../components/listItems/ArkadTeamListItem'
import SectionHeader from '../../components/SectionHeader'

const AboutScreen = ({
  navigation, aboutUs, openingHours, aboutArkadTeam, arkadTeam
}) => (
  <DetailsScreen>
    <DisplayImage source={require('../../../resources/img/teknikfokus_logo.png')} />
    <TextSection title="About Teknikfokus" description={aboutUs} />
    <TextSubtitleSection
      title="Opening hours"
      subtitleSections={openingHours.map((openingHour, index) => ({
        key: index.toString(),
        subtitle: openingHour.date,
        description: openingHour.time
      }))}
    />
    <TextSection
      title="The Teknikfokus organization"
      description={aboutArkadTeam}

    />
    {arkadTeam[0].data.map(item => <ArkadTeamListItem key={item.key} person={item} />) }

  </DetailsScreen>
)

AboutScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  aboutUs: PropTypes.string.isRequired,
  aboutArkadTeam: PropTypes.string.isRequired,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({ date: PropTypes.string.isRequired, time: PropTypes.string.isRequired })
      .isRequired
  ).isRequired
}

export default AboutScreen
