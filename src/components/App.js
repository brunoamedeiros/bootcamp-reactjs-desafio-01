import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: '',
        name: 'Diego Schell Fernandes',
        time: 'há 3 min',
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odit voluptate magnam omnis sunt dolores a ducimus ea soluta, debitis natus blanditiis in numquam itaque beatae perspiciatis saepe alias dignissimos.',
      },
      {
        id: 2,
        avatar: '',
        name: 'Rubia Savolksi',
        time: 'há 10 min',
        text: 'lorem2',
      },
      {
        id: 3,
        avatar: '',
        name: 'Mr. Mustache',
        time: 'há 20 min',
        text: 'lorem3',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}
