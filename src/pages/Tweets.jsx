// import tweets from '../users.json';
import { useState, useEffect } from 'react';
import { TweetList } from 'components/TweetList/TweetList';
import { fetchTweets } from 'services/api';

const Tweets = () => {
  // const [error, setError] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getTweets() {
      try {
        const data = await fetchTweets();
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTweets();
  }, []);

  return <TweetList tweets={tweets} />;
};

export default Tweets;
