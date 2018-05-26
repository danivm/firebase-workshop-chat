import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import materialApp from './materialApp'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

function App (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Firebase Chat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default materialApp(withStyles(styles)(App))
