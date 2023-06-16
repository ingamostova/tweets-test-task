import { useState, useEffect } from 'react';
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
  // const [quantity, setQuantity] = useState(followers);
  const [quantity, setQuantity] = useState(
    () => JSON.parse(window.localStorage.getItem(`quantity_${id}`)) ?? followers
  );
  // const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(
    () => JSON.parse(window.localStorage.getItem(`isActiveBtn_${id}`)) ?? false
  );

  const numberConvert = number => {
    const re = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    // console.log('1234567890'.replace(re, '$&,'));
    return String(number).replace(re, '$&,');
  };

  useEffect(() => {
    localStorage.setItem(`quantity_${id}`, JSON.stringify(quantity));
    localStorage.setItem(`isActiveBtn_${id}`, JSON.stringify(isActiveBtn));
  }, [id, quantity, isActiveBtn]);

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
          <Info>{numberConvert(quantity)} followers</Info>
        </InfoContainer>
        <Btn isActive={isActiveBtn} onClick={handleClick}>
          {!isActiveBtn ? 'follow' : 'following'}
        </Btn>
      </ContainerBottom>
    </Item>
  );
};
