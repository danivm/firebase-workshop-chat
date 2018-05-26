import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import materialApp from './materialApp'
import InputBar from './inputBar'
import MessageList from './messageList'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

class App extends Component {
  state = {
    user: null,
    messages: []
  }

  addMessage = (text) => {
    const { messages } = this.state
    const time = Date.now()
    const message = { text, time }
    messages.push(message)
    this.setState({ messages })
  }

  render () {
    const { messages } = this.state
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Firebase Chat
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <MessageList messages={messages}/>
        <InputBar addMessage={this.addMessage}/>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default materialApp(withStyles(styles)(App))
