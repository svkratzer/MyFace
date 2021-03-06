import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import DemoLoginButton from './demo_button';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className='splash-body'>
          
          <div className="splash-top">
              <div className="splash-header">
                <a href="/" className="splash-title">myface</a>
                <LoginFormContainer />
              </div>
          </div>

          <div className="splash-main">
            <div className="splash-main-body">
              <div className="splash-info-section">
                <h2>Connect with friends and the world around you on MyFace.</h2>
                <ul>
                  <li>
                    <div><i className="far fa-images"></i></div>
                    <span>See photos and updates</span>&nbsp;from friends in News Feed.
                  </li>
                  <li>
                    <div><i className="fas fa-desktop"></i></div>
                    <span>Share what's new</span>&nbsp;in your life on your Wall.
                  </li>
                  <li>
                    <div><i className="fas fa-search"></i></div>
                    <span>Find more</span>&nbsp;of what you're looking for with MyFace Search.
                  </li>
                </ul>
              </div>

              <div className="splash-signup-section">
                <h2>Sign Up</h2>
                <h3>It's quick and easy.</h3>
                <SignupFormContainer />
                <hr/>
                {/* <button onClick={() => this.props.login(this.demoUserCredentials)}
                  className="demo-login-button">
                  Demo Login
                </button> */}
                <DemoLoginButton signup={this.props.signup}/>
                <div className="signup-form-terms">
                  Click the <span>Demo Login</span> button to be automatically logged into the demo account.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-bottom">

          <div className="splash-footer">

            <div>Check out the repo on <a onClick={() => window.open("https://github.com/svkratzer/MyFace")}>Github</a>
            </div>
            <hr />
            <div> Sam Kratzer © 2020 </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Splash;