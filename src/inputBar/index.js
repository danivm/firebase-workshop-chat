import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import './index.scss'

const CLASS = 'inputBar'

class InputBar extends Component {
  state = {
    message: ''
  }

  handleAddTasks = e => {
    const { message } = this.state
    if (e.key === 'Enter') {
      this.props.addMessage(message)
      this.setState({ message: '' })
    }
  }

  handleClick = () => {
    const { message } = this.state
    this.props.addMessage(message)
    this.setState({ message: '' })
  }

  handleChange = e => {
    const message = e.target.value
    this.setState({ message })
  }

  render () {
    const { message } = this.state

    return (
      <div className={CLASS}>
        <Input
          className={`${CLASS}-input`}
          placeholder="Write a message..."
          onChange={this.handleChange}
          onKeyPress={this.handleAddTasks}
          value={message}
        />
        <Button
          variant="raised"
          color="primary"
          className={`${CLASS}-button`}
          onClick={this.handleClick}
        >
          Send
          <Icon className={`${CLASS}-icon`}>send</Icon>
        </Button>
      </div>
    )
  }
}

export default InputBar
