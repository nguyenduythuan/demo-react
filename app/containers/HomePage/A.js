import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: white;
  background: seagreen;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.5;
  }
`;
