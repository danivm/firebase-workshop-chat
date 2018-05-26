import React, { Component, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Divider from '@material-ui/core/Divider'

class messageList extends Component {
  getDate (time) {
    const date = new Date(time)
    const d = date.getDate()
    const m = date.getMonth()
    const y = date.getFullYear()
    const mm = date.getMinutes()
    const hh = date.getHours()
    const ss = date.getSeconds()
    return d + '/' + m + '/' + y + ' - ' + hh + ':' + mm + ':' + ss
  }
  render () {
    const { messages } = this.props
    return (
      <div>
        <List>
          {
            messages.map(message => (
              <Fragment key={message.time}>
                <ListItem>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                  <ListItemText
                    primary={message.text}
                    secondary={this.getDate(message.time)}
                  />
                </ListItem>
                <li>
                  <Divider inset />
                </li>
              </Fragment>
            ))
          }
        </List>
      </div>
    )
  }
}

export default messageList
