import React from 'react';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./Siderbar.css";
import UserProfile from './UserProfile';


function Siderbar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-img'>
              <img src='./user.png' alt=''/>
            </div>
            <div className='sidebar-header-btn'>
                <TollIcon/>
                <InsertCommentIcon/>
                <MoreVertIcon/>
            </div>
        </div>

        <div className='sidebar-search'>
          <div className='sidebar-search-input'>
            <SearchIcon />
            <input type="text" name='search' placeholder='Rechercher...'/>
          </div>
        </div>

        <div className='sidebar-chat-list'>
          <UserProfile name="Destinée MOUISSOU" photoURL='./destinee.png' />
          <UserProfile name="BEY Nicaise Nickson" photoURL='./bey.png' />
          <UserProfile name="VINDOU Lyod Prelude" photoURL='./prelude.png' />
          <UserProfile name="N'DOUM Don-Sanctifié" photoURL='./don.png' />
          <UserProfile name="NGOUALA BAKALA Girhes" photoURL='./ngouala.png'/>
          <UserProfile name="BOUMBA Gilberton" photoURL='./jule.png'/>

          <UserProfile name="Destinée MOUISSOU" photoURL='./destinee.png' />
          <UserProfile name="BEY Nicaise Nickson" photoURL='./bey.png' />
          <UserProfile name="VINDOU Lyod Prelude" photoURL='./prelude.png' />
          <UserProfile name="N'DOUM Don-Sanctifié" photoURL='./don.png' />
          <UserProfile name="NGOUALA BAKALA Girhes" photoURL='./ngouala.png'/>
          <UserProfile name="BOUMBA Gilberton" photoURL='./jule.png'/>
          
          <UserProfile name="Destinée MOUISSOU" photoURL='./destinee.png' />
          <UserProfile name="BEY Nicaise Nickson" photoURL='./bey.png' />
          <UserProfile name="VINDOU Lyod Prelude" photoURL='./prelude.png' />
          <UserProfile name="N'DOUM Don-Sanctifié" photoURL='./don.png' />
          <UserProfile name="NGOUALA BAKALA Girhes" photoURL='./ngouala.png'/>
          <UserProfile name="BOUMBA Gilberton" photoURL='./jule.png'/>
        </div>
    </div>
  );
}

export default Siderbar;
