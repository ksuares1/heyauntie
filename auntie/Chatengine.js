import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const Chat= () => {
  return (
    <ChatEngine
      userName='hellokimmy'
      projectID ='9f7f31e2-7a93-4185-b369-f6dab03a7c5e'
      userSecret='a38895b5-5a7b-4875-b691-5e3955a1a93'
    />
  )
}
export default Chat;