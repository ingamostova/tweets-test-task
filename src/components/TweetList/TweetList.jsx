import { Tweet } from 'components/Tweet/Tweet';
import { List } from './TweetList.styled';

export const TweetList = ({ tweets }) => {
  return (
    <List>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} item={tweet} />
      ))}
    </List>
  );
};
