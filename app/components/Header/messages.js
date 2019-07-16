/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.component.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Demo-react',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
});
