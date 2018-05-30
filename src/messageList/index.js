import React, { Component, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Divider from '@material-ui/core/Divider'
import StayScrolled from 'react-stay-scrolled'
import './index.scss'

const CLASS = 'messageList'

class messageList extends Component {
  getDate (time) {
    const date = new Date(time)
    const mm = ('0' + date.getMinutes()).substr(-2)
    const hh = ('0' + date.getHours()).substr(-2)
    const ss = ('0' + date.getSeconds()).substr(-2)
    return hh + ':' + mm + ':' + ss
  }

  componentDidUpdate (prevProps) {
    this.stayScrolled()
  }

  storeScrolledControllers = ({ stayScrolled, scrollBottom }) => {
    this.stayScrolled = stayScrolled
    this.scrollBottom = scrollBottom
  }

  getName (message) {
    const { user } = message
    return user ? user.name : 'User'
  }

  render () {
    const { messages } = this.props

    return (
      <StayScrolled className={CLASS} provideControllers={this.storeScrolledControllers}>
        <List>
          {
            messages.map(message => (
              <Fragment key={message.time}>
                <ListItem>
                  {
                    message.user
                      ? <Avatar src={message.user.avatar} />
                      : <Avatar>
                        <AccountCircle />
                      </Avatar>
                  }
                  <ListItemText>
                    <div className={`${CLASS}-header`}>
                      <span className={`${CLASS}-user`}>{this.getName(message)}</span>
                      <span className={`${CLASS}-date`}>{this.getDate(message.time)}</span>
                    </div>
                    <span className={`${CLASS}-message`}>{message.text}</span>
                  </ListItemText>
                </ListItem>
                <li>
                  <Divider inset />
                </li>
              </Fragment>
            ))
          }
        </List>
      </StayScrolled>
    )
  }
}

export default messageList
