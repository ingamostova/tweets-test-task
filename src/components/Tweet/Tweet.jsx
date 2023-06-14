import { useState } from 'react';
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
  const [quantity, setQuantity] = useState(followers);
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  const handleClick = () => {
    if (isActiveBtn) {
      setQuantity(prevState => (prevState -= 1));
      setIsActiveBtn(false);
      return;
    }
    setQuantity(prevState => (prevState += 1));
    setIsActiveBtn(true);
    return;
  };

  return (
    <Item>
      <Container>
        <ContainerTop>
          <Image src={Logo} alt="" />
        </ContainerTop>
      </Container>
      <ContainerBottom>
        <Avatar src={avatar} alt="" />
        <InfoContainer>
          {' '}
          <Info>{user}</Info>
          <Info>{tweets} tweets</Info>
          <Info>{quantity} followers</Info>
        </InfoContainer>
        <Btn isActive={isActiveBtn} onClick={handleClick}>
          {!isActiveBtn ? 'follow' : 'following'}
        </Btn>
      </ContainerBottom>
    </Item>
  );
};
