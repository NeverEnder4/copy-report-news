import React from 'react';
import FormTabs from '../../components/FormTabs/FormTabs';
import queryString from 'query-string';
import ShareIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import HotIcon from '@material-ui/icons/Whatshot';
import SavedIcon from '@material-ui/icons/Save';
import DevicesIcon from '@material-ui/icons/Phonelink';
import Button from '../../components/Button/Button';

import './Users.scss';

const Users = ({ location }) => {
  const parsedFormType = queryString.parse(location.search);
  const tabIndex = parsedFormType.form === 'login' ? 1 : 0;
  return (
    <main className="users">
      <FormTabs tabIndex={tabIndex} />
      <div className="users__content-container">
        <div className="users__content-position">
          <h1 className="users__headline">
            Free <span className="users__headline--pink">Articles</span>
          </h1>
          <p className="users__description">
            Login or Signup to access all of our best features. There is
            currently no charge for a membership and no spam email mailing
            lists!
          </p>
          <p className="users__description users__description--pink">
            With a membership, you'll have access to
          </p>
          <ul className="users__features-list">
            <li className="users__features-item">
              <SearchIcon fontSize="large" />
              <h2 className="users__features-text">Search</h2>
              <p className="users__features-description">
                With Copy Report News, you get access to all major news outlets
                and their affiliates.
              </p>
            </li>
            <li className="users__features-item">
              <SavedIcon fontSize="large" />
              <h2 className="users__features-text">Save articles</h2>
              <p className="users__features-description">
                You can easily access them at a later time so you can read them
                at your leisure.
              </p>
            </li>
            <li className="users__features-item">
              <HotIcon fontSize="large" />
              <h2 className="users__features-text">Latest News</h2>
              <p className="users__features-description">
                Using{' '}
                <a
                  href="https://newsapi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NewsAPI.org's
                </a>{' '}
                API, you can assure that we're delivering the latest news.
              </p>
            </li>
            <li className="users__features-item">
              <ShareIcon fontSize="large" />
              <h2 className="users__features-text">Share</h2>
              <p className="users__features-description">
                Share your favorite articles with friends and family on all
                major social media outlets.
              </p>
            </li>
            <li className="users__features-item">
              <DevicesIcon fontSize="large" />
              <h2 className="users__features-text">Responsive</h2>
              <p className="users__features-description">
                No matter what type of device you're using, your experience will
                be unhindered!
              </p>
            </li>
          </ul>
          <h1 className="users__headline">
            Questions? <span className="users__headline--pink">Ideas?</span>
          </h1>
          <p className="users__description">
            We'd love to answer any questions you have or hear ideas about how
            we can make our product better!
          </p>
          <div className="users__cta-button-position">
            <Button text="contact" color="secondary" variant="contained" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
