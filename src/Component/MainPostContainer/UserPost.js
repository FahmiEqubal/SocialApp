import React from 'react';
import { FiEdit, FiTrash, FiMessageSquare, FiRefreshCw, FiHeart, FiShare2 } from 'react-icons/fi';
import './userpost.css';

const UserPost = ({ postText }) => {
  return (
    <div className="user-post-container">
      <div className="user-info">
        <div className="user-profile-image"></div>
        <div className="user-details">
          <div className="user-name">John Doe</div>
          <div className="user-username">@johndoe</div>
        </div>
        <div className="user-actions">
          <FiEdit className="user-action-icon" />
          <FiTrash className="user-action-icon" />
        </div>
      </div>
      <div className="user-post">
        {postText.length > 50 ? (
          <>
            {postText.slice(0, 50)} <span className="see-more">See more</span>
          </>
        ) : (
          postText
        )}
      </div>
      <div className="interaction-options">
        <div className="interaction-option">
          <FiMessageSquare /> <span>Comment</span>
        </div>
        <div className="interaction-option">
          <FiRefreshCw /> <span>Repost</span>
        </div>
        <div className="interaction-option">
          <FiHeart /> <span>Like</span>
        </div>
        <div className="interaction-option">
          <FiShare2 /> <span>Share</span>
        </div>
      </div>
      <div className="post-time">2 hours ago</div>
    </div>
  );
};

export default UserPost;
