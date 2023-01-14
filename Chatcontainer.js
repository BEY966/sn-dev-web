import React, { useState } from 'react';
import "./Chatcontainer.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';
import "./Chatcontainer.css";
import ChatMessage from './ChatMessage';

function Chatcontainer() {

  const [message, setMessage]= useState("");
  const [openEmojiBox, setOpenEmojiBox] = useState(false);

  return (
    <div className='chat-container'>
      <div className='chat-container-header'>
        <div className='chat-user-info'>
          <div className='chat-user-img'>
            <img src='./destinee.png' alt=''/>
          </div>
          <p>Destinée MOUISSOU</p>
        </div>

        <div className='chat-container-header-btn'>
          <MoreVertIcon/>
        </div>
      </div>
        {/*affichage du conteneur de chat*/}
        <div className='chat-display-container'>
          <ChatMessage message='Bonjour, comment vas-tu?' time='13-01-2023' />
          <ChatMessage message='Bonjour, comment vas-tu?' time='13-01-2023' />
          <ChatMessage message='Bonjour, comment vas-tu?' time='13-01-2023' />
          <ChatMessage message='Bonjour, comment vas-tu?' time='13-01-2023' />
        </div>
        {/*entrer chat*/}
        <div className='chat-input'>
          {/*bouton*/}
          {openEmojiBox && <Picker/>}
        
          <div className='chat-input-btn'>
            <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
            <AttachFileIcon/>
          </div>
          {/*zone d'entrer de text*/}
          <form>
            <input type= "text" 
              placeholder="Ecrire un message..." 
              value={message} 
              onChange={(e) => { 
                setMessage(e.target.value);
              }} 
            />
          </form>
          {/*bouton d'envoie*/}
          <div className='chat-input-send-btn'>
            <SendIcon/>
          </div>

        </div>

    </div>
  );
}

export default Chatcontainer;
