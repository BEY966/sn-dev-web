import React from 'react';
import "./UserProfile.css";

function UserProfile({ name, photoURL}) {
  return <div className='user-profile'>
    {/*image d'utilisateur*/}
    <div className='user-image'>
        <img src={photoURL} alt=''/>
    </div>
    {/*nom de l'utilisateur*/}
    <div className='user-info'>
        <p className='user-name'>{name}</p>
    </div>
  </div>;
}

export default UserProfile;
