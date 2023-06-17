import {
  Container,
  Header,
  Link,
} from 'components/SharedLayout/SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets" state={{ from: location }}>
            Tweets
          </Link>
        </nav>
      </Header>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
