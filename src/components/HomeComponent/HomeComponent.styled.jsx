import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  text-align: center;
  background-color: #ebd8ff;
  border-radius: 40px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-family: 'Permanent Marker';
  color: #212121;
  font-size: 50px;

  @media screen and (min-width: 824px) {
    font-size: 100px;
  }
`;
