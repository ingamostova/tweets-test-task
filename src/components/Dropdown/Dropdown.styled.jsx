import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  padding: 8px 16px;
  border-radius: 4px;
  color: #373737;
  background-color: #ebd8ff;
  text-align: center;
  margin: 0 auto;
  transition: all 300ms ease-out;

  :hover {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #fff;
    cursor: pointer;
  }
`;
