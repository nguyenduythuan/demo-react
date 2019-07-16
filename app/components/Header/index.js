/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { Route } from 'react-router-dom';
import messages from './messages';

import Nav from './Nav';
import NavTitle from './NavTitle';
import NavBar from './NavBar';
import Link from './Link';

const HeadLink = ({ label, to, activeOnlyExact }) => (
  <Route
    path={to}
    exact={activeOnlyExact}
    children={({ match }) => (
      <li>
        <Link className={match ? 'active' : ''} to={to}>
          {label}
        </Link>
      </li>
    )}
  />
);

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Nav>
          <NavTitle>
            <Typography variant="h5" noWrap>
              <FormattedMessage {...messages.header} />
            </Typography>
          </NavTitle>
          <NavBar>
            <HeadLink
              label={<FormattedMessage {...messages.home} />}
              to="/home"
              exact
            />
            <HeadLink
              label={<FormattedMessage {...messages.contact} />}
              to="/contact"
              exact
            />
          </NavBar>
        </Nav>
      </AppBar>
    );
  }
}
