/* eslint-disable no-lone-blocks */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/home' route
 *
 */

import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import messages from './messages';
import Section from '../../components/Section';
import A from './A';
import { selectHome } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchData } from './actions';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    props.onfetchUser();
  }, []);
  return (
    <Container maxWidth="md">
      <Box mt={2} mb={2}>
        <Typography variant="h4">
          <FormattedMessage {...messages.header} />
        </Typography>
      </Box>
      <Section>
        <MaterialTable
          title="List User"
          columns={[
            {
              title: 'Detail',
              field: 'id',
              render: rowData => <A to={`/users/${rowData.id}`}>view</A>,
            },
            {
              title: 'Name',
              field: 'name',
              render: rowData => {
                if (rowData.name.length >= 8) {
                  return <span style={{ color: 'blue' }}>{rowData.name}</span>;
                }
                return rowData.name;
              },
            },
            { title: 'Email', field: 'email' },
            { title: 'Address', field: 'address' },
            { title: 'Phone', field: 'phone' },
          ]}
          data={props.users}
        />
      </Section>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectHome,
});
const mapDispatchToProps = dispatch => ({
  onfetchUser: () => {
    dispatch(fetchData());
  },
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
