import {
  Item,
  ContainerTop,
  Container,
  ContainerBottom,
  Image,
  Info,
  InfoContainer,
  Btn,
  Avatar,
} from './Tweet.styled';
import Logo from '../../images/Vector.svg';

export const Tweet = ({ item: { id, user, avatar, followers, tweets } }) => {
  return (
    <Item>
      <Container>
        <ContainerTop>
          <Image src={Logo} alt="" />
        </ContainerTop>
      </Container>
      <ContainerBottom>
        <Avatar src={avatar} alt="" />
        {/* <h2>{user}</h2> */}
        {/* <img src={avatar} alt={user} width={260} height={260} /> */}
        <InfoContainer>
          {' '}
          <Info>{user}</Info>
          <Info>{tweets} tweets</Info>
          <Info>{followers} followers</Info>
        </InfoContainer>
        <Btn>follow</Btn>
      </ContainerBottom>
    </Item>
  );
};
