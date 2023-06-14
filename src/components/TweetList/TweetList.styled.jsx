import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 32px;
  margin: 0px auto;
  width: 412px;

  @media screen and (min-width: 824px) {
    width: 792px;
  }

  @media screen and (min-width: 1236px) {
    width: 1204px;
  }
`;
