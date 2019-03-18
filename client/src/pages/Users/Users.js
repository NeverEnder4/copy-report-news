import React from 'react';
import FormTabs from '../../components/FormTabs/FormTabs';
import queryString from 'query-string';

import SearchIcon from '@material-ui/icons/Search';
import HotIcon from '@material-ui/icons/Whatshot';
import SavedIcon from '@material-ui/icons/TurnedInNot';

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
              <span className="users__features-text">
                Search a variety of news sources
              </span>
            </li>
            <li className="users__features-item">
              <SavedIcon fontSize="large" />
              <span className="users__features-text">
                Save articles to read for later
              </span>
            </li>
            <li className="users__features-item">
              <HotIcon fontSize="large" />
              <span className="users__features-text">
                Trending articles that are relevent
              </span>
            </li>
            <li className="users__features-item">
              <SearchIcon fontSize="large" />
              <span className="users__features-text">
                Search a variety of news sources
              </span>
            </li>
            <li className="users__features-item">
              <SavedIcon fontSize="large" />
              <span className="users__features-text">
                Save articles to read for later
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Users;
