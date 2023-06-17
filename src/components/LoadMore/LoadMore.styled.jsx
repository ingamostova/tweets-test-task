import styled from '@emotion/styled';

export const Btn = styled.button`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  color: #373737;
  background-color: #ebd8ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;

  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 300ms ease-out;
  :hover {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #fff;
  }
`;
