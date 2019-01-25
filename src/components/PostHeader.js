import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <div className="post-avatar" />
    <div className="post-author">
      <h1>{props.name}</h1>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
