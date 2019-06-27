import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png"
              alt="avatar"
              className="avatar-img"
            /> 
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr/>
              <p>HTML/CSS | JavaScript | React | Ruby | Rails | NodeJS | PostgreSQL</p> 
          
              <div className="social-links">
                
                {/* LinkedIn */} 
                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */} 
                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              
                {/* YouTube */} 
                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* FreeCodeCamp */}
                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

              </div>  

            </div>
          </Cell>
        </Grid>
 
      </div> 
    );
  }
}

export default Landing;
