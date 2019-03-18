import React from 'react';
import logo from '../../static/crn-logo.svg';
import Button from '../../components/Button/Button';
import NewsSourceDisplay from '../../components/NewsSourceDisplay/NewsSourceDisplay';
import './Landing.scss';

const Landing = () => (
  <main className="landing">
    <div className="landing__container">
      <img className="landing__logo" src={logo} alt="logo" />
      <h1 className="landing__subheading">
        Read Save Share and Learn |{' '}
        <span className="landing__subheading--small">
          your favorite news sources in one place!
        </span>
      </h1>
      <div className="landing__button-container">
        <Button
          text="Signup"
          color="secondary"
          variant="contained"
          path="/users?form=signup"
        />
        <Button
          text="Login"
          color="secondary"
          variant="contained"
          path="/users?form=login"
        />
      </div>
      <NewsSourceDisplay />
      <p className="landing__attribution">
        Powered by{` `}
        <a
          className="landing__attribution-link"
          href="https://newsapi.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NewsAPI.org
        </a>
      </p>
    </div>
  </main>
);

export default Landing;
