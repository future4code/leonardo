import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from '../MatchScreen/styled'
import {mdiAccountMultipleCheck} from '@mdi/js'
import { getMatches } from '../../actions/profiles'
import { ContentWrapper, SwipeScreenWrapper, OptionButton} from '../SwipeScreen/styled'
import UserSwipeCard from '../../components/UserSwipeCard'

class ProfileScreen extends React.Component {
  render() {
    const {goToMatchScreen, goToSwipeScreen, matches} = this.props
    return (
      <div>
        <AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
          />
            
        }
        rightAction={<MatchIcon
          size={1.5}
          path={mdiAccountMultipleCheck}
          onClick={goToMatchScreen}
        />}
				/>
        <ContentWrapper>
					
					
					
				</ContentWrapper>
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  profileToSwipe : state.profiles.profileToSwipe
})

const mapDispatchToProps = (dispatch) => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
  goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
