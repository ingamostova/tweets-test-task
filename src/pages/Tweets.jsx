import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetList } from 'components/TweetList/TweetList';
import { fetchTweets } from 'services/api';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { BackBtn } from 'components/BackBtn/BackBtn';
import { Dropdown } from 'components/Dropdown/Dropdown';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [selectedTweets, setSelectedTweets] = useState(
    () => JSON.parse(window.localStorage.getItem('selectedTweets')) ?? []
  );
  const [selectedFilter, setSelectedFilter] = useState('all');
  const tweetsPerPage = 6;
  const [visibleTweetsCount, setVisibleTweetsCount] = useState(tweetsPerPage);

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('selectedTweets', JSON.stringify(selectedTweets));
    async function getTweets() {
      try {
        const data = await fetchTweets();
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTweets]);

  const handleFollowToggle = (tweetId, isFollowed) => {
    if (isFollowed) {
      setSelectedTweets(prevState => [...prevState, tweetId]);
    } else {
      setSelectedTweets(prevState =>
        prevState.filter(idTweet => idTweet !== tweetId)
      );
    }
  };

  const handleLoadMore = () => {
    setVisibleTweetsCount(prevCount => prevCount + tweetsPerPage);
  };

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
  };

  const filteredTweets =
    selectedFilter === 'all'
      ? tweets
      : selectedFilter === 'following'
      ? tweets.filter(tweet => selectedTweets.includes(tweet.id))
      : selectedFilter === 'follow'
      ? tweets.filter(tweet => !selectedTweets.includes(tweet.id))
      : [];

  return (
    <>
      <BackBtn to={location.state.from} />{' '}
      {tweets && (
        <Dropdown
          selectedFilter={selectedFilter}
          onChange={handleFilterChange}
        />
      )}
      <div style={{ textAlign: 'center' }}>
        <TweetList
          tweets={filteredTweets.slice(0, visibleTweetsCount)}
          activeFollowers={selectedTweets}
          onFollowToggle={handleFollowToggle}
        />
        {visibleTweetsCount < filteredTweets.length && (
          <LoadMore onClick={handleLoadMore} />
        )}
      </div>
    </>
  );
};

export default Tweets;
