import tweets from '../users.json';
import { TweetList } from 'components/TweetList/TweetList';

const Tweets = () => {
  return <TweetList tweets={tweets} />;
};

export default Tweets;
