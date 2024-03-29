import React from 'react'
import "../style/AddPost.css"
import { useSelector } from "react-redux"

const AddPost = () => {
    const myProfile = useSelector((state) => state.myProfile.profileData)
    return (
        <div className='add-post'>
            <div className="input-container d-flex justify-content-between p-2">
                <img className='post-profile-image' src={myProfile.image} alt="" />
                <input type="text" className="post-input" placeholder="Start a post" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="action-container m-auto">
                <p><i className="bi bi-card-image text-info mr-2"></i>Photo</p>
                <p><i className="bi bi-play-btn-fill text-success mr-2"></i>Video</p>
                <p><i className="bi bi-calendar-date text-warning mr-2"></i>Event</p>
                <p><i className="bi bi-file-text text-danger mr-2"></i>Write article</p>
            </div>
        </div>
    )
}

export default AddPost