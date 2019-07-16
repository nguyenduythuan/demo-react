/* eslint-disable import/no-unresolved */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Section from 'components/Section';
import messages from './messages';

export default function PageUser() {
  return (
    <Section>
      <Container maxWidth="sm">
        <Typography variant="h4">
          <FormattedMessage {...messages.header} />
        </Typography>
      </Container>
    </Section>
  );
}
