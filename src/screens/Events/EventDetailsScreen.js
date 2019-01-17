import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Linking, Alert } from 'react-native'
import DetailsScreen from '../../components/DetailsScreen'
import TitleSection from '../../components/text/TitleSection'
import TextSection from '../../components/text/TextSection'
import Button from '../../components/Button'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

class EventDetailsScreen extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   myText: 'I\'m ready to get swiped!',
    //   gestureName: 'none',
    //   backgroundColor: '#fff'
    // }
  }

  openUrl = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url)
        } else {
          Alert.alert(`Could not open URL: ${this.url}`)
        }
      })
      .catch(err => Alert.alert(`Could not open URL: ${err}`))
  }

  EventDetailsScreen = ({ navigation }) => {
    const event = navigation.state.params.item
    let description = ''
    if (event.speaker !== '') {
      description += `Speaker:\t${event.speaker}\n`
    }
    if (event.language !== '') {
      description += `Language:\t${event.language}\n`
    }
    description += `Location:\t${event.location}\nDate:\t\t${event.date} ${event.startTime}-${
      event.endTime
      }`

  }

  onSwipeLeft(gestureState) {
    Alert.alert(`You swiped left`)
  }

  onSwipeRight(gestureState) {
    Alert.alert(`You swiped right`)
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    this.setState({ gestureName: gestureName })
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }

    const event = this.props.navigation.state.params.item

    let SignUpURLexists = true
    if (event.signUpURL == '') {
      SignUpURLexists = false
    }

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1
        }}
      >
        <DetailsScreen>
          <TitleSection title={event.name} description={event.description} />
          <TextSection
            title="Description"
            description={event.description}
            button={SignUpURLexists ? <Button title="Sign up" onPress={() => openUrl(event.signUpURL)} /> : undefined}
          />
        </DetailsScreen>
      </GestureRecognizer>
    )
  }




  //   let SignUpURLexists = true
  //   if (event.signUpURL == '') {
  //     SignUpURLexists = false
  //   }
  //   if (SignUpURLexists) {
  //     return (
  //       <DetailsScreen>
  //         <TitleSection title={event.name} description={description} />
  //         <TextSection
  //           title="Description"
  //           description={event.description}
  //           button={<Button title="Sign up" onPress={() => openUrl(event.signUpURL)} />}
  //         />
  //       </DetailsScreen>
  //     )
  //   }
  //   return (
  //     <DetailsScreen>
  //       <TitleSection title={event.name} description={description} />
  //       <TextSection
  //         title="Description"
  //         description={event.description}
  //       />
  //     </DetailsScreen>
  //   )
  // }

  // EventDetailsScreen.propTypes = {
  //   navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
  // }

}
export default EventDetailsScreen
