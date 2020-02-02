import React from 'react'
import { SectionList, Image } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import DisplayImage from '../../components/DisplayImage'
import TextSection from '../../components/text/TextSection'
import TextSectionNoLine from '../../components/text/TextSectionNoLine'
import Line from '../../components/text/Line'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'
import BoldText from '../../components/text/BoldText'
import ArkadTeamListItem from '../../components/listItems/ArkadTeamListItem'
import SectionHeader from '../../components/SectionHeader'
import DescriptionText from '../../components/text/DescriptionText';

const AboutScreen = ({
  navigation, aboutUs, openingHours, aboutArkadTeam, arkadTeam, theApp
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
    <TextSectionNoLine
      title="The Teknikfokus organization"
      description={aboutArkadTeam}
    />
    <BoldText description={"  The Project Group"} />

    {arkadTeam[0].data.map(item => <ArkadTeamListItem key={item.key} person={item} />) }

    <Line></Line>

    <TextSectionNoLine
      title="App Development"
      description={theApp}
    />
    
    <DisplayImage source={require('../../../resources/img/arkad-logo.png')} />

  </DetailsScreen>
)


AboutScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  aboutUs: PropTypes.string.isRequired,
  aboutArkadTeam: PropTypes.string.isRequired,
  theApp:PropTypes.string.isRequired,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired })
      .isRequired
  ).isRequired
}

export default AboutScreen
