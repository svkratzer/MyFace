import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class Wall extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="wall">
        <PostIndexContainer />
      </div>
    );
  }
}

export default Wall;