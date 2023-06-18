import PropTypes from 'prop-types';
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

export const Tweet = ({
  item: { id, user, avatar, followers, tweets },
  onFollowToggle,
  activeFollowers,
}) => {
  const isFollowerActive = activeFollowers.includes(id);
  const followerCount = isFollowerActive ? followers + 1 : followers;

  const numberConvert = number => {
    const re = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    return String(number).replace(re, '$&,');
  };

  const handleClick = () => {
    onFollowToggle(id);
    if (isFollowerActive) {
      onFollowToggle(id, false);
      return;
    }
    onFollowToggle(id, true);
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
          <Info>{numberConvert(followerCount)} followers</Info>
        </InfoContainer>
        <Btn isActive={isFollowerActive} onClick={handleClick}>
          {!isFollowerActive ? 'follow' : 'following'}
        </Btn>
      </ContainerBottom>
    </Item>
  );
};

Tweet.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
  }),
  onFollowToggle: PropTypes.func.isRequired,
  activeFollowers: PropTypes.arrayOf(PropTypes.string.isRequired),
};
