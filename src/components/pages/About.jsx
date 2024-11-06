import React from 'react';
import '../../assets/styles/about.css';
import profile from '../../assets/images/profile.jpg';

export default function About() {
  return (
    <div className="about-container d-flex py-5">
      <div className="about-text flex-grow-1">
        <h1 className="text-center mb-4">Martha's Biography</h1>
        <p className="lead">
          With an award-winning background in art and a degree in the field, Martha has honed her craft in a variety of media, including stained glass, sculpture, and painting. Her artistic journey has been marked by a passion for creating captivating works across traditional forms. <br />
          <br />
          She's eager to expand her creative horizons, and is now venturing into the digital realm, blending her expertise in physical art with the dynamic world of coding and design. Her unique perspective promises to bridge the gap between tactile art forms and innovative digital experiences.
        </p>
      </div>
      <img
        src={profile}
        alt="profile photo"
        className="about-image"
        style={{ width: '300px', height: 'auto' }}
      />
    </div>
  );
}
