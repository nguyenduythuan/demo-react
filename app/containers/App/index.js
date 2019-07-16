/* eslint-disable no-unused-vars */
/**
 *
 * App.js
 *
 * Chiều tàn bóng ngả nghiên nghiên
 * Chiều nay bỗng thấy người khiêng anh bình
 * Kèn loa trống nổi xập xìn
 * Cả làng thanh khóc anh Bình ra đi
 *
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PageUser from 'containers/PageUser/Loadable';
import Contact from 'containers/Contact/Loadable';
import GlobalStyle from '../../global-styles';
import AppWrapper from '../../components/AppWrapper';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Article>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:userId" component={PageUser} />
          <Route component={NotFoundPage} />
        </Switch>
      </Article>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
