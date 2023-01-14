import React from 'react';
import Siderbar from './Siderbar';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            {/*SiderBar*/}
            <Siderbar/>
            {/*un container avec le logo de whatsapp*/}
            <div className='home-bg'>
              <img src='./WhatsAppbg.png' alt='' />
            </div>
        </div>
    </div>
  );
}

export default Home;
