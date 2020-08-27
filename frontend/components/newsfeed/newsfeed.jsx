import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import NewsfeedPostIndexContainer from './newsfeed_post_index_container'

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)

    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  render() {
    if (!this.props.currentUser) return null;
    const { currentUser } = this.props;
    const currentUserPhoto = this.props.currentUser.profile_url || this.defaultPhoto;

    return (
      <>
        <NavBarContainer />
        <section className="newsfeed-main">

          <div className="newsfeed-links sidebar">
            <div className="info">
              Welcome to MyFace! Below you'll find some useful links, like the project's Github repo and the creator's Portfolio. 
            </div>
            <a href="https://github.com/svkratzer/MyFace">
              <i className="fab fa-github"></i>
              <div>Github</div>
            </a>
            <a href="https://svkratzer.github.io/">
              <i className="fas fa-book-reader"></i>
              <div>Portfolio</div>
            </a>
            <a href="">
              <i className="fab fa-linkedin"></i>
              <div>LinkedIn</div>
            </a>
            <a href="">
              <i className="fab fa-angellist"></i>
              <div>AngelList</div>
            </a>
          </div>

          <div className="newsfeed-center">
            <div className="post-form-button-container">
              <img src={currentUserPhoto} />
              <div className="post-form-button"
                onClick={this.props.openModalPostForm}>
                <span>What's on your mind, {currentUser.first_name}?</span>
              </div>
            </div>
            <NewsfeedPostIndexContainer />
          </div>

          <div className="suggested-friends sidebar">

          </div>
        </section>
      </>
    );
  }
}

export default Newsfeed;