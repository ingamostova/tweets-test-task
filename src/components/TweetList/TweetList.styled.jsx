import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  margin: 0px auto;
  width: 380px;

  @media screen and (min-width: 824px) {
    flex-direction: row;
    width: 792px;
  }

  @media screen and (min-width: 1236px) {
    width: 1204px;
  }
`;
