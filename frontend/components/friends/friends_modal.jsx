import React from 'react';
import {Link} from 'react-router-dom';

class FriendsModal extends React.Component {
  constructor(props) {
    super(props);

    this.defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }

  gridify(friends) {
      return friends.map( (friend) => {
        let photoUrl = null;

        if (!friend.profile_url) {
          photoUrl = this.defaultPhoto;
        } else {
          photoUrl = friend.profile_url;
        }

        return (
          <div key={friend.friendship_id} className="friend-item">
            <img src={photoUrl} />
            <Link to={`/users/${friend.friend_id}`}>
              {friend.first_name} {friend.last_name}
            </Link>
          </div>
        );

      });
    }
  

  render() {
    const { friends } = this.props
    const friendItems = this.gridify(friends);
    return (
      <div className="friends-modal-container">
        <div className="title">Friends</div>
        <div className="line"></div>
        <div className="friends-list">
          {friendItems}
        </div>
      </div>
    );
  }
}

export default FriendsModal;