import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit'

class Chat extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    const chatkit = new ChatManager({
      instanceLocator: 'v1:us1:8c3e2aa7-f80d-4c0f-9827-ad43635e7deb',
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url:
          'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/125f0437-935f-427b-b5f4-184686364aaf/token'
      })
    })

    chatkit
    .connect()
    .then(currentUser => {
      this.setState({ currentUser })
      console.log('Bleep bloop 🤖 You are connected to Chatkit')
    })
    .catch(error => console.error('error', error))
}

render() {
  return (
    <div>
      <h1>Chat Screen</h1>
    </div>
  )
}
}

export default Chat