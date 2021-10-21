import React from 'react'
import PhotoProfile from '../PhotoProfil.jfif'
import './card.css'

const ProfilePhoto = () => {
    return (
        <div className="img-container">
            <img src={PhotoProfile} alt="mon image " className="Photo"></img>
        </div>
    )
}

export default ProfilePhoto
