import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import DivFooter from './DivFooter';

export default function Footerr() {
  return (
    <DivFooter>
      <FormattedMessage {...messages.footer} />
    </DivFooter>
  );
}
