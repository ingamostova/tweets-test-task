// import tweets from '../users.json';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetList } from 'components/TweetList/TweetList';
import { fetchTweets } from 'services/api';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { BackBtn } from 'components/BackBtn/BackBtn';
import { Dropdown } from 'components/Dropdown/Dropdown';

const Tweets = () => {
  // const [error, setError] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [displayedTweets, setDisplayedTweets] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const tweetsPerPage = 4;

  const location = useLocation();

  useEffect(() => {
    async function getTweets() {
      try {
        const data = await fetchTweets();
        setTweets(data);
        setDisplayedTweets(data.slice(startIndex, startIndex + tweetsPerPage));
      } catch (error) {
        console.log(error);
      }
    }

    getTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreTweets = () => {
    const newIndex = startIndex + tweetsPerPage;
    setDisplayedTweets(prevState => [
      ...prevState,
      ...tweets.slice(prevState.length, newIndex + tweetsPerPage),
    ]);
    setStartIndex(newIndex);
  };

  return (
    <>
      {/* <Link to={location.state.from}>Back</Link> */}
      <BackBtn to={location.state.from} />
      <Dropdown />
      <div style={{ textAlign: 'center' }}>
        <TweetList tweets={displayedTweets} />
        {displayedTweets.length > 0 &&
          displayedTweets.length !== tweets.length && (
            <LoadMore onClick={loadMoreTweets} />
          )}
      </div>
    </>
  );
};

export default Tweets;
