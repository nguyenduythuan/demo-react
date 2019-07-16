/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import messages from './messages';

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">
        <FormattedMessage {...messages.header} />
      </Typography>
    </Container>
  );
}
