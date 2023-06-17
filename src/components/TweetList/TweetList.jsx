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
