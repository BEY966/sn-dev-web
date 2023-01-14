import React from 'react';
import Chatcontainer from './Chatcontainer';
import Siderbar from './Siderbar';
import "./ChatPage.css"

function ChatPage() {
  return (
    <div className='chatpage'>
      <div className='chatpage-container'>
        {/*sidebar*/}
      <Siderbar/>
      {/*conteneur de chat*/}
      <Chatcontainer/>
      </div>
    </div>
  );
}

export default ChatPage;
