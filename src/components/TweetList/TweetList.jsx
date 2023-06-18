import PropTypes from 'prop-types';
import { Tweet } from 'components/Tweet/Tweet';
import { List } from './TweetList.styled';

export const TweetList = ({ tweets, onFollowToggle, activeFollowers }) => {
  return (
    <List>
      {tweets.map(tweet => (
        <Tweet
          activeFollowers={activeFollowers}
          onFollowToggle={onFollowToggle}
          key={tweet.id}
          item={tweet}
        />
      ))}
    </List>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onFollowToggle: PropTypes.func.isRequired,
  activeFollowers: PropTypes.arrayOf(PropTypes.string.isRequired),
};
