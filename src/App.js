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
import { db, auth, provider } from './firebase'

const dbMessages = db.collection('tasks')

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

  componentDidMount () {
    this.getMessages()
  }

  getMessages = () => {
    dbMessages.onSnapshot(snapshot => {
      const messages = []
      snapshot.forEach(message => {
        messages.push(message.data())
      })
      this.setState({ messages })
    })
  }

  addMessage = (text) => {
    if (text) {
      const { user } = this.state
      const time = Date.now()
      const message = { text, time, user }
      const id = time.toString()
      dbMessages.doc(id).set(message)
    }
  }

  handleLogin = () => {
    auth.signInWithPopup(provider).then(result => {
      const { displayName: name, photoURL: avatar } = result.user
      const user = { name, avatar }
      this.setState({ user })
    })
  }

  handleLogout = () => {
    auth.signOut().then(() => this.setState({ user: null }))
  }

  render () {
    const { messages, user } = this.state
    const { classes } = this.props
    return (
      <div className='appContainer'>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Firebase Chat
            </Typography>
            {
              user
                ? <Button color="inherit" onClick={this.handleLogout}>Logut</Button>
                : <Button color="inherit" onClick={this.handleLogin}>Login</Button>
            }
          </Toolbar>
        </AppBar>
        <MessageList messages={messages}/>
        {
          user &&
          <InputBar addMessage={this.addMessage}/>
        }
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default materialApp(withStyles(styles)(App))
