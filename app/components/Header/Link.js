import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 1em 1em;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
  opacity: 0.7;
  &:hover {
    background-color: #00000014;
    color: white;
    opacity: 1;
  }
`;
