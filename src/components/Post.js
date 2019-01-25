import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post-item">
    <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} />
    <p>{props.data.text}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
