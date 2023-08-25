import React, { useState } from 'react';
import { FiImage, FiVideo, FiPaperclip, FiClock } from 'react-icons/fi';
import './mainpost.css';

const MainPost = () => {
  const [postText, setPostText] = useState('');
  const [showScheduleInput, setShowScheduleInput] = useState(false);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Posted:", postText);
    setPostText('');
  };

  const toggleScheduleInput = () => {
    setShowScheduleInput(!showScheduleInput);
  };

  const handleVideoAttach = (e) => {
    const selectedVideo = e.target.files[0];
    // Process the selected video as needed
    console.log("Selected video:", selectedVideo);
  };

  return (
    <div className="twitter-post-container">
      <div className="toolBar">
        <div className="post-input">
          <textarea
            className="post-textarea"
            placeholder="What's happening?"
            value={postText}
            onChange={handlePostChange}
          />
          <div className="post-button" onClick={handlePostSubmit}>
            Post
          </div>
        </div>
        <div className="action-icons">
          <div className="icon-label">
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              className="attachment-input"
            />
            <FiImage size={24} />
          </div>
          <div className="icon-label">
            <input
              type="file"
              accept=".mp4, .quicktime"
              className="attachment-input"
              onChange={handleVideoAttach}
            />
            <FiVideo size={24} />
          </div>
          <div className="icon-label">
            <FiPaperclip size={24} />
          </div>
          <div className="icon-label" onClick={toggleScheduleInput}>
            <FiClock size={24} />
          </div>
        </div>
      </div>
      {showScheduleInput && (
        <input
          type="datetime-local"
          className="schedule-input"
        />
      )}
      <div className="countdown-circle">
        {/* Add countdown circle content */}
      </div>
    </div>
  );
};

export default MainPost;
