import React from 'react';
import { logoArray } from './logos';

import './NewsSourceDisplay.scss';

const NewsSourceDisplay = () => (
  <div className="news-source-display">
    <div className="news-source-display__container">
      {logoArray.map((logo, index) => (
        <img
          className="news-source-display__logo"
          key={index}
          src={logo}
          alt=""
        />
      ))}
    </div>
    {/* <span className="news-source-display__text">And more...</span> */}
  </div>
);

export default NewsSourceDisplay;
