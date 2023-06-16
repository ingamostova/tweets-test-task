import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  color: #373737;
  background-color: #ebd8ff;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 16px;
  transition: all 300ms ease-out;
  :hover {
    /* background-color: #303f9f; */
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #fff;
  }
`;
